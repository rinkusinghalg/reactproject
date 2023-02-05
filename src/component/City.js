import { NavLink } from "react-router-dom";
function City()
{
    return(
        <div style={{backgroundColor:'yellowgreen'}}>
        <h1>This is my city</h1>
        <i>I belong to smart city aligarh and i study in aligarh<br/>
        My home in aligarh and aligarh is best city so i good feel in aligarh</i><br/>
        <NavLink className='m' to='/about'>Back About</NavLink>
    </div>
    )
}export default City;