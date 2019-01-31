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
        correctNumber: 0
      }
  }
  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({methods: json}) 
  }

  check = (e) => {e.preventDefault()
    if(e.target[0].value === this.state.methods[this.state.index].name) {
      this.setState({
        index: this.state.index + 1,
        correct: 'Correct',
        correctIndex: this.state.index,
        correctNumber: this.state.index + 1})
      if(this.state.methods.length -1 === this.state.index) {
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

  submitNew = async (event) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "name": event.target[0].value,
        "description": event.target[1].value,
        "example": event.target[2].value,
        "tags": "tag",
        "link": event.target[3].value
      })
    })
  }

  update = (e) => {e.preventDefault()
    const updateDescription = this.state.methods
    updateDescription[this.state.index].description = e.target[0].value
    this.setState({ methods: updateDescription })
      // this.sendMessage(newMessage.subject, newMessage.body)
    // e.target.reset()
        // let updatedCard = {
    //   description: e.target[0].value,
    //   id: this.state.methods[this.state.index].id,
    //   example: this.state.methods[this.state.index].example,
    //   link: this.state.methods[this.state.index].link,
    //   name: this.state.methods[this.state.index].name,
    //   tags: this.state.methods[this.state.index].tags
    // }
    // this.setState({methods: [updatedCard, ...this.state.methods]})
  }

  render() {
    let corNum = this.state.correctNumber / this.state.methods.length *100
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
                update={this.update}/>
            </div>
          : <div className="row justify-content-center">
              <Loader type="Triangle" color="#00BFFF" height="100" width="100"/>
            </div>}
        {/* <Difficulty /> */}
        {/* <Progress 
          state={this.state}
          corNum={corNum} /> */}
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