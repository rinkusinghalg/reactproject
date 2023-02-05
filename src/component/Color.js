import {Link,NavLink,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Basicform from './Basicform';
import './Dsp.css'
function Color()
{
    const navigate=useNavigate();
    return(
        <nav className='dd'>
            
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/project'>Project</NavLink>
            <Button onClick={()=>navigate('/form')}>Register</Button>
           
        </nav>
    )
}export default Color;