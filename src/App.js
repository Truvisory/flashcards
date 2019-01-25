import React, { Component } from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Input from './components/Input'
import Difficulty from './components/Difficulty'
const url = 'http://localhost:3000/'

class App extends Component {
  constructor(){
    super()
      this.state = {
        methods: []
      }
  }
  async componentDidMount() {
    const response = await fetch(url)
    const json = await response.json()
    this.setState({methods: json})
  }

  render() {
    return (
      <div className="container">
        <Header />
        {this.state.methods[0]
          ? <Card methods={this.state.methods}/>
          : <div></div>}
        <Difficulty />
        <Input />
      </div>
    );
  }
}

export default App;
