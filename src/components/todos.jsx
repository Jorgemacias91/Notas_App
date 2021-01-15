
import React from 'react'

function Todos({status, remove}){
   
        const todos = status.map((todo,i) => {
            return(
                <div className="col-md-4 mt-4" key={i}>
                <div className="card">
                    
                    <div className="card-header">
                      <h3>{todo.title}</h3>
                      <span className="badge badge-pill bg-primary">{todo.priority}</span>
                    </div>

                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p><mark>{todo.responsible}</mark></p>
                    </div>

                    <div className="card-footer">
                        <button  className="bg-danger text-white"
                        onClick={() => remove(i)}
                         >
                           Eliminar
                         </button>
                    </div>
                    </div>
                    
                </div>
            )
        })
    
    
        return(
            <div className="container">
                <div className="row">
                {todos}
                </div>
                    
            </div>

        )
    }



export default Todos;
