import { NavLink } from 'react-router-dom';
import './Dsp.css'
function Home()
{
    return(
        <div className="c">
            <h2>This is my home page and some work on its here.Some project work on eaisly and online work
                its means that project are work and some where its thank for watch my project
            </h2>
            <ol><h1 style={{color:'orchid'}}>Project</h1>
                <li>Stop watch</li>
                <li>Form validation</li>
                <li>Responsive page </li>
                <NavLink className='m' to='/more'>More Detail</NavLink>

            </ol>
        </div>
    )
}export default Home;