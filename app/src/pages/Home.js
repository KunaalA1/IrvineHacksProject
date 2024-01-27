import Header from '../components/Header';
import MajorDrop from '../components/MajorDrop';
import DepartmentDrop from '../components/DepartmentDrop';
import Button from '../components/Button'
import React from 'react'
import {Link} from 'react-router-dom'
import Page2 from './Page2'
import '../Home.css'
import '../Header.css';


export default class Home extends React.Component {
    state = {
        filled: false,
    };
    handleCallback = (childData) => {
        this.setState({filled: childData})
    };

    render() {
        const {filled} = this.state;
        return (
        <div className="Home">
            <Header/>
            <p style={{fontSize:"3em"}}>First, select your department!</p>
            <DepartmentDrop parentCallback={this.handleCallback}/>
            <div className="spacer"></div>
            <Link to="/page2">
                <Button>Next</Button>
            </Link>
            
        </div>
    );
    }
    
}

