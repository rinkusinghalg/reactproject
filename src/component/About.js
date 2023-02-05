import { NavLink ,Outlet} from 'react-router-dom';
import './Dsp.css'
import Inner from './Inner';
function About()
{
    return(
       <>
       <div className="x">
            <h2>My name is Rinku singh</h2>
            <address>I am from aligarh</address>
            <h5>I did compeleted Master of computer application with first devision</h5>
            <h6>I work hard and then i was this position so it my hard work so its
                means that i understanding and support and clic my mind
            </h6>
            <address>I went to aligarh college of engennering and technology and 
                i final mca in 2021 with first division
            </address>
            <NavLink className='m' to='/city'>City</NavLink>
          <NavLink className='m' to='/channel'>Channel</NavLink>
          <NavLink className='m' to='/own'>Own</NavLink>
          <Outlet/>
          
        </div>
        <Inner/>
        </>
    )
}export default About;