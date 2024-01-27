import Header from '../components/Header';
import MajorDrop from '../components/MajorDrop';
import DepartmentDrop from '../components/DepartmentDrop';
import styled from 'styled-components'
import '../Home.css'
import '../Header.css';

const Button = styled.button`
color: #BF4F74;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #BF4F74;
border-radius: 3px;
`;

export default function Home() {
    return (
        <div className="Home">
            <Header/>
            <p style={{fontSize:"3em"}}>First, select your department!</p>
            <DepartmentDrop />
            <div className="spacer"></div>
            <Button>Hello</Button>
        </div>
    );
}