import { NavLink } from "react-router-dom";

function More()
{
    return(
        <div style={{backgroundColor:"black"}}>
            <h2>Home title</h2>
            <p>this is my home page and i work professional and i intersted from it job <br/>
            And some problem in startup and later i feel good and i work hard each other </p>
            <NavLink className='m' to='/'>Back to Home</NavLink>
            <h2>My resume is show on click buttoon</h2>
            <NavLink className='m' to='/resume'>Show Resume</NavLink>
        </div>
    )
}export default More;