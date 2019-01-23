import React, { Component } from 'react';
import Header from './components/Header'
import Card from './components/Card'
import Input from './components/Input'
import Difficulty from './components/Difficulty'

class App extends Component {
  constructor(){
    super()
      this.state = {
          tags: [
            "string",
            "array",
            "object",
            "includesCallback",
            "easy",
            "medium",
            "hard",
          ],
          methods: [{
            id: 1,
            name: '.map',
            description: 'creates a new array with the results of calling a provided function on every element in the calling array.',
            example: '',
            tags: ["array", "medium"],
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'
            },
            {
            id: 2,
            name: '.filter',
            description: 'creates a new array with all elements that pass the test implemented by the provided function.',
            example: "ar words = ['spray', 'limit' 'elite', 'exuberant', 'destruction' 'present'] const result = words.filter(word => word.length > 6) console.log(result) // expected output: Array ['exuberant', 'destruction', 'present']",
            tags: ["array", "medium"],
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'
            },
            {
            id: 3,
            name: '.reduce',
            description: 'executes a reducer function (that you provide) on each member of the array resulting in a single output value.',
            example: '',
            tags: ["array", "hard"],
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce'
            }]
        }
      }

  render() {
    return (
      <div className="container">
        <Header />
        <Card methods={this.state.methods}/>
        <Difficulty />
        <Input />
      </div>
    );
  }
}

export default App;
