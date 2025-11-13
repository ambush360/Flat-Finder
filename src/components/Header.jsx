    import React from 'react'
    import { NavLink } from 'react-router'
    const Header = () => {
      return (
        <div>
            <h2>Header</h2>
            <nav>
                <NavLink to='/' > Home </NavLink>
                <NavLink to='/properties'> Properties </NavLink>
            </nav>
            <div className="buttons">
                <NavLink to="/login" > Login </NavLink>
                <NavLink to="/register" > Register </NavLink>
            </div>
        </div>
      )
    }
    
    export default Header