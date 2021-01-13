import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/NavBar';
import Form from '../src/components/Form'
import {todos} from '../src/Datos.json'
import Todos from '../src//components/todos'

console.log(todos)

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos
  }
  this.addTodos = this.addTodos.bind(this);
}


addTodos(todo){

  this.setState({
    todos : [...this.state.todos, todo]
  })
}

removeTodo(index){
  if(window.confirm("Estas seguro de eliminar la tarea?")){
    this.setState({
      todos : this.state.todos.filter((e,i) => {
        return i != index
      })
    })
  }
}




  render(){
    return(
      <div className="App">
      
        <div>
          <Nav inf = {this.state.todos.length}/>
        </div>

        <div className="container">
          <div className="row mt-4">


           <div className="col-md-4">
           <img src={logo} className="App-logo" alt="logo" />
           <Form addTodo = {this.addTodos}/>
           </div>

           <div className="col-md-8">
          <Todos status={this.state.todos} remover={this.removeTodo}/>
        </div>
        </div>
        </div>

    </div>
    )
  }
}



export default App;
