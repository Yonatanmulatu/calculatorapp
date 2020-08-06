import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import HelloWorld from './components/HelloWorld.js'
// import Menu from './components/Menu';
// import ScoreWidget from './components/ScoreWidget';
// import NameTag from './components/NameTag';
import Post from './components/Post';
// import DataBinding from './components/DataBinding';
import NumberButton from './components/NumberButton';
import OperatorButton from './components/OperatorButton';
import Result from './components/Result';


class App extends React.Component {
  state = {
    numberField: '',
    operator: '',
    numberField2: '',
    left: '',
    display: ''
  }
  
  buttons = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 0];
  operations = ['+', '-', 'x', '/'];

  numberBtnClickHandler = (e) => {
    this.setState({
      numberField: this.state.numberField + e.target.textContent
    })
  }

  ClearBtnClickHandler = (e) => {
    this.setState({
      numberField: '',
      operator: '',
      numberField2: '',
      left: '',
      display: ''
    })
  }

  operatorBtnClickHandler = (e) => {
    this.setState({
      operator: e.target.textContent,
      left: this.state.numberField,
      numberField: '',
      display: this.state.display + this.state.numberField + e.target.textContent
    })
    this.solve();
  }

  solve = () => {
    let num;
    console.log(this.state.operator);
    switch(this.state.operator) {
      case '+':
        num = this.state.left*1 + this.state.numberField*1;
        console.log(this.state.left, this.state.numberField);
      break;
      case '-':
        num = this.state.left*1 - this.state.numberField*1;
        break;
      case 'x':
        num = this.state.left*1 * this.state.numberField*1;
        break;
      case '/':
        num = this.state.left*1 / this.state.numberField*1;
        break;
      default:
        return "Error";
    }
      this.setState({
        left: num,
      })
  }

    render(){
      return (
        <div className="App">
          <header className="App-header">
              <div>
                operator: {this.state.operator}<br/>
                numberField1: {this.state.numberField}<br/>
                left: {this.state.left}<br/>
                output: {this.state.output}<br/>
              </div>
              <div>
                display: {this.state.display}
              </div>
              <div>
                  {
                    this.buttons.map( (num) => {
                      return <NumberButton numberBtnClickHandler={this.numberBtnClickHandler} num={num}/>
                    })
                  }
              </div>
              <div>
                  {
                    this.operations.map( (operator) => {
                      return <OperatorButton operatorBtnClickHandler={this.operatorBtnClickHandler} operator={operator}/>
                    })
                  }
                    <button onClick={this.solve}>=</button>
                    <button onClick={this.ClearBtnClickHandler}>Clear</button>
              </div>
          </header>
        </div>
      );
    }
  }
  
  export default App;

  // this.state({
  //   input: event.e.target.value,
  //   firstName: e.target.value
  // });

//   state = {
//     text: 'Welcome',
//     firstName: '',
//     lastName: '',
//   }

//     firstNameChangeHandler = (e) => {
//       this.setState({
//         firstName: e.target.value,
//       });
//     }
//     lastNameChangeHandler = (e) => {
//       this.setState({
//         lastName: e.target.value,
//       })
//     }

//   render() {
//     return (
//       <div className="App">
//           <header className="App-header">
//               <input type="text" onChange={this.firstNameChangeHandler}/>
//               <input type="text" onChange={this.lastNameChangeHandler}/>
//               <button onClick={this.submitClickHandler}>Submit</button>
//               <button >Reset</button>
//               <div> {this.state.text} {this.state.firstName} {this.state.lastName}</div>
//             </header>
//       </div>
//     );
//   }
// }

// export default App;



// class App extends React.Component {
//   state = {
//     numberField: "",
//     operator: "",
//     left: "",
//     output: ""
//   }
//   buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   operators = ["+", "-", "x", "/"];
//   numberBtnClickHandler = (e) => {
//     this.setState({
//       numberField: this.state.numberField + e.target.textContent
//     })
//   }
//   operatorClickHandler = (e) => {
//     this.setState({
//       operator: e.target.textContent,
//       left: this.state.numberField,
//       numberField: ""
//     })
//     this.solve()
//   }
//   solve = () => {
//     let num;
//     switch(this.state.operator) {
//       case "+":
//         num = this.state.left*1 + this.state.numberField*1;
//         break;
//       case "-":
//         num = this.state.left*1 - this.state.numberField*1;
//         break;
//       case "x":
//         num = this.state.left*1 * this.state.numberField*1;
//         break;
//       case "/":
//         num = this.state.left*1 / this.state.numberField*1;
//         break;
//       default:
//         return "Handle an error";
//     }
//     this.setState({
//       left: num
//     })
//   }
//   render() {
//     return(
//       <div className="App">
//         <header className="App-header">
//           <div>
//             Operator: {this.state.operator} <br/>
//             Number: {this.state.numberField} <br/>
//             Left: {this.state.left}
//           </div>
//           <div>
//             {
//               this.buttons.map( (num) => {
//                 return <button onClick={this.numberBtnClickHandler}>{num}</button>
//               })
//             }
//           </div>
//           <div>
//             {
//               this.operators.map( (operation) => {
//                 return <button onClick={this.operatorClickHandler}>{operation}</button>
//               })
//             }
//             <button onClick={this.solve}>=</button>
//           </div>
//         </header>
//       </div>
//     )
//   }
// }
// export default App;



