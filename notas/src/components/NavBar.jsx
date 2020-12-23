import React from 'react'

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark text-white">
                <h3>Tereas <span>{this.props.inf}</span></h3>
              
            </nav>
        )
    }
}

export default NavBar;

