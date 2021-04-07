import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';



class quiz extends Component {
    render() {
        return (
            <div>
                <div className="start_btn"><Link to='/regle' ><button>commencer le test</button></Link></div>
            </div>
        );
    }
}
export default quiz;