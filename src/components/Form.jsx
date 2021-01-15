import React from 'react'

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            title : "",
            responsible : "",
            description: "",
            priority : "low" 
                }
                this.hInput = this.hInput.bind(this);
                this.hSubmit = this.hSubmit.bind(this);
    }
    
   hInput(e){
           this.setState({
               [e.target.name] : e.target.value
       })
    }

    hSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state);

    }
    
    
    
    
    render(){
        return(
            <div className="card">
            <form className="card-body" onSubmit={this.hSubmit}>

                <div className="form-group">
                    <input
                    type="text"
                    name="title"
                    onChange={this.hInput}
                    className="form-control"
                    placeholder="Tìtulo"
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                    type="text"
                    name="responsible"
                    onChange={this.hInput}
                    className="form-control"
                    placeholder="Responsable"
                    />
                </div>

                <div className="form-group mt-3">
                    <input
                    type="text"
                    name="description"
                    onChange={this.hInput}
                    className="form-control"
                    placeholder="Descripción"
                    />
                </div>

                <div className="form-group mt-3">
                    <select
                    name="priority"
                    onChange={this.hInput}
                    className="form-control"
                    >
                        <option>Bajo</option>
                        <option>Medio</option>
                        <option>Alto</option>

                    </select>

                </div>

                <button className="bg-primary text-white mt-3">Agregar</button>
                
            </form>
            </div>
        )
    }
}
export default Form;