import React, { Component } from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Input from './components/Input'
import Difficulty from './components/Difficulty'
import Loader from 'react-loader-spinner'
const url = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super()
      this.state = {
        methods: [],
        index: 0
      }
  }
  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({methods: json})
  }

  check = (e) => {e.preventDefault()
    console.log('clicky poo I see you')
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.methods[0]
          ? <Card state={this.state}/>
          : <div className="row justify-content-center">
              <Loader type="Triangle" color="#00BFFF" height="100" width="100"/>
            </div>}
        {/* <Difficulty /> */}
        <Input check={this.check}/>
      </div>
    );
  }
}
export default App;