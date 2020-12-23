import React from 'react'

class Todos extends React.Component{
    render(){
        const todos = this.props.status.map((todo,i) => {
            return(
                <div className="col-md-4 mt-4">
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
                        <button
                         className="bg-danger text-white"
                         onClick={this.props.remover.bind(this, i)}
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
}


export default Todos;