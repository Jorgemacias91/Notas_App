import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../src/components/NavBar';
import Form from '../src/components/Form'
import {todos} from '../src/Datos.json'
import Todos from '../src/components/todos'

export default function App(){

    const [estado, setEstado] = useState(todos);

function addTodos(todo){
  setEstado([...estado, todo]
  )
}

function removeTodo(index){
  if(window.confirm("Desea eliminar la tarea seleccionada?")){
  setEstado(estado.filter((e,i) => i !== index))
  }
}


    return(
      <div className="App">
      
        <div>
          <Nav inf = {estado.length}/>
        </div>

        <div className="container">
          <div className="row mt-4">


           <div className="col-md-4">
           <img src={logo} className="App-logo" alt="logo" />
           <Form 
           addTodo = {addTodos}
           />
           </div>

           <div className="col-md-8">
          <Todos 
            status={estado} 
            remove={removeTodo}
          />
        </div>
        </div>
        </div>

    </div>
    )
  }
