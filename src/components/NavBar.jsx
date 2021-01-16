import React from 'react'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark text-white">
                <h3><span>{this.props.inf} Actividades </span></h3>
              
            </nav>
        )
    }
}

export default NavBar;

