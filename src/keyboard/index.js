import "../App.css"
import React, {Component} from "react";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return {
    code: state.code, // код (спойлер: 1337)
    value: state.value, // ввод кода
    bg: state.bg, // цвет для изменения фона
    type: state.type // тип инпута (пусто или password)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    input0: () => dispatch({ type: "ADD_SYMBOL", payload: '0'}),
    input1: () => dispatch({ type: "ADD_SYMBOL", payload: '1'}),
    input2: () => dispatch({ type: "ADD_SYMBOL", payload: '2'}),
    input3: () => dispatch({ type: "ADD_SYMBOL", payload: '3'}),
    input4: () => dispatch({ type: "ADD_SYMBOL", payload: '4'}),
    input5: () => dispatch({ type: "ADD_SYMBOL", payload: '5'}),
    input6: () => dispatch({ type: "ADD_SYMBOL", payload: '6'}),
    input7: () => dispatch({ type: "ADD_SYMBOL", payload: '7'}),
    input8: () => dispatch({ type: "ADD_SYMBOL", payload: '8'}),
    input9: () => dispatch({ type: "ADD_SYMBOL", payload: '9'}),
    backspace: () => dispatch({ type: "DELETE_SYMBOL"}),
    enter: () => dispatch({ type: "ENTER"}),
  };
};

class Keyboard extends Component {
    render() {

    return (

      <div className="App" style={{backgroundColor: this.props.bg}}>
        <header className="App-header">
          <input readOnly={true} type={this.props.type} value={this.props.value}></input>
          <table>
            <tbody>
              <tr>
                <td><button onClick={this.props.input7}>7</button></td> 
                <td><button onClick={this.props.input8}>8</button></td>
                <td><button onClick={this.props.input9}>9</button></td>
              </tr>
              <tr>
                <td><button onClick={this.props.input4}>4</button></td>
                <td><button onClick={this.props.input5}>5</button></td>
                <td><button onClick={this.props.input6}>6</button></td>
              </tr>
              <tr>
                <td><button onClick={this.props.input1}>1</button></td>
                <td><button onClick={this.props.input2}>2</button></td>
                <td><button onClick={this.props.input3}>3</button></td>
              </tr>
              <tr>
                <td><button onClick={this.props.backspace}>&#60;</button></td>
                <td><button onClick={this.props.input0}>0</button></td>
                <td><button onClick={this.props.enter}>E</button></td>
              </tr>
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);