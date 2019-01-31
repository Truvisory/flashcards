import React, { Component } from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Input from './components/Input'
import Loader from 'react-loader-spinner'
import Correct from './components/Correct'
import Incorrect from './components/Incorrect'
import Progress from './components/Progress'
import Submit from './components/Submit'
const url = 'http://localhost:3001/'

class App extends Component {
  constructor(){
    super()
      this.state = {
        methods: [],
        index: 0,
        correct: '',
        correctIndex: '',
        correctNumber: 0,
        updateDescription: false
      }
  }
  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({methods: json}) 
  }

  newCard = async (body) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    })
      // const response = await fetch(url)
      // const json = await response.json()
      // this.setState({methods: json})
  }

  submitNew = (e) => {e.preventDefault()
    let body = {
      "name": e.target[0].value,
      "description": e.target[1].value,
      "example": e.target[2].value,
      "tags": "tag",
      "link": e.target[3].value
    }
    this.setState({methods: [body, ...this.state.methods]})
    this.newCard(body)
    e.target.reset()
  }

  updateCard = async (updatedDescription) => {
    await fetch(`${url}update/${this.state.methods[this.state.index].id}`, {
      method: 'PUT',
      body: JSON.stringify({
        "description": updatedDescription,
        "id": this.state.methods[this.state.index].id,
        "example": this.state.methods[this.state.index].example,
        "link": this.state.methods[this.state.index].link,
        "name": this.state.methods[this.state.index].name,
        "tags": this.state.methods[this.state.index].tags
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  deleteCard = async () => {
    await fetch(`${url}she-gone/${this.state.methods[this.state.index].id}`, {
      method: 'DELETE',
      body: JSON.stringify({ "id": this.state.methods[this.state.index].id }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  check = (e) => {e.preventDefault()
    if(e.target[0].value === this.state.methods[this.state.index].name) {
      this.setState({
        index: this.state.index + 1,
        correct: 'Correct',
        correctIndex: this.state.index,
        correctNumber: this.state.index + 1})
      if(this.state.methods.length - 1 === this.state.index) {
        this.setState({
          index: 0,
          correct: 'Correct',
          correctIndex: this.state.index,
          correctNumber: this.state.methods.length})
      }
      e.target.reset()
    }
    else {
      this.setState({correct: 'Incorrect'})
      e.target.reset()
    }
  }

  textInput = (e) => {
    const updateDescription = this.state.methods
    updateDescription[this.state.index].description = e.target.value
    this.setState({ methods: updateDescription })
  }

  update = (e) => {e.preventDefault()
    const updateDescription = this.state.methods
    updateDescription[this.state.index].description = e.target[0].value
    this.setState({
      methods: updateDescription,
      updateDescription: false})
    this.updateCard(e.target[0].value)
    e.target.reset()
  }

  updateToggle = () => this.setState({updateDescription: !this.state.updateDescription})

  delete = () => {
    const deleteCard = this.state.methods.filter(card => card.id !== this.state.methods[this.state.index].id)
    if(this.state.methods.length - 1 === this.state.index) this.setState({ index: this.state.index - 1})
    this.setState({ methods: deleteCard})
    this.deleteCard()
  }

  increment = () => {
    if(this.state.index !== this.state.methods.length - 1) this.setState({ index: this.state.index + 1})
    if(this.state.methods.length - 1 === this.state.index) this.setState({ index: 0})
  }

  decrement = () => {
    this.state.index === 0
      ? this.setState({ index: this.state.methods.length - 1})
      : this.setState({ index: this.state.index - 1})
  }

  render() {
    let corNum = this.state.correctNumber / this.state.methods.length * 100
    return (
      <div className="container-fluid">
      {this.state.correctNumber !== 0
              ? <Progress 
                state={this.state}
                corNum={corNum} />
              : <div></div> }
        <Header />
        {this.state.methods[0]
          ? <div>
              <Card 
                state={this.state}
                update={this.update}
                textInput={this.textInput}
                delete={this.delete}
                increment={this.increment}
                decrement={this.decrement}
                updateToggle={this.updateToggle}/>
            </div>
          : <div className="row justify-content-center">
              <Loader type="Triangle" color="#00BFFF" height="100" width="100"/>
            </div>}
        <Input check={this.check}/>
        {this.state.correct === 'Correct'
          ? <Correct state={this.state}/>
          : this.state.correct === 'Incorrect'
            ? <Incorrect />
            : <div></div> }
        <Submit 
          submitNew={this.submitNew} />
      </div>
    );
  }
}
export default App;