import Header from '../components/Header';
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import '../Header.css';
import '../Page2.css'

export default function Page2() {
    return (
      <div className="Page2">
        <Link to="/">
          <Button>Return</Button>
        </Link>
        <Header/>        
      </div>
    );
  }