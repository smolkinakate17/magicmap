import React, { Component } from 'react'
import Fcomponent from './Fcomponent'

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Ivan"
      }
    }
  
  render() {
    return (
        <div>
          <p>Hello, Peter {this.state.name}</p>
          <Fcomponent name={this.state.name}/>
        </div>
    )
  }
}

//          Ccomponent.defaultProps = {name: "Alexey"}
//          Class component {this.props.numbers.join(',')}
//          <h1 className="hello">Hello world</h1>
/** изменение состояния по клику
 *
 *       this.state = {
         name: "Alex"
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            name: "Peter"
        })
    }
 */

/** счетчик
 * export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
      this.inc = this.inc.bind(this);
      this.dec = this.dec.bind(this);
      this.reset = this.reset.bind(this);

    }
    inc(){
      this.setState(state => 
          ({count: state.count+1})
      );
    }
    dec(){
      this.setState(state => 
          ({count: state.count-1})
      );
    }
    reset(){
     this.setState(state => 
         ({count: state.count=0})
      );
    }  
  render() {
    return (
        <div>
            <h1>
            Number {this.state.count}
            </h1>
            <button onClick={this.inc}>increment</button>
            <button onClick={this.dec}>decrement</button>
            <button onClick={this.reset}>reset</button>
        </div>
    )
  }
}
 */

/** вывод ввода через кнопку
 * export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       input: "",
       submit: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
      this.setState({
        input: event.target.value
    })
    }
    handleSubmit(event){
      event.preventDefault()
      this.setState({
        submit: this.state.input
    })
    }
  
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type="submit">Submit!</button>
          </form>
        <h3>{this.state.submit}</h3>
        </div>
    )
  }
}
 */

/** вывод всех вводов через кнопку
 * export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
       input: "",
       items: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
      this.setState({
        input: event.target.value
    })
    }
    handleSubmit(event){
      event.preventDefault()
      this.setState({
        input: this.state.input,
        items: [...this.state.items, this.state.input]
    })
    }
  
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type="submit">Submit!</button>
          </form>
        <ul>{this.state.items.map((items, index) => (
          <li key = {index} > {items}</li>
        ))}</ul>
        </div>
    )
  }
}
 */