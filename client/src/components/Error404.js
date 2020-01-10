import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Error404 extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1 style = {{ fontSize: '700%' }}>404</h1>
                    <h2>Page is not found</h2>
                    <div onClick={console.log('Return to Home Page')}><Link to="/home">Return to Home Page</Link></div>
                </center>
            </div>
        )
    }
}
