import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
function Resume(){
    return(
        <div>
           
            


    <Table striped bordered hover variant="dark">
      <thead>
      <tr>
            <th colSpan={5}>Personal Detail</th>
        </tr>
        <tr>
          <th>Sr No.</th>
          <th>Full Name</th>
          <th>E Mail</th>
          <th>Mobile</th>
          <th>Adhar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rinku Singh</td>
          <td>rinkusinghalg@gmail.com</td>
          <td>8395042915</td>
          <td>212959907420</td>
        </tr>
        <tr>
            <th colSpan={5}>Qualification</th>
        </tr>
        <tr>
          <td>2</td>
          <th>High school</th>
          <th>Intermidiate</th>
          <th>BCA</th>
          <th>MCA</th>
        </tr>
        <tr>
          <td>3</td>
          <td>U P Board<br/>(A her sec jirauli heera singh akrabad aligarh)<br/>72.6%</td>
          
          <td>U P Board<br/>(R I C Inter college akarabad)<br/>71.6%</td>
          <td>Dr Bhim Rao A University Agra<br/>(Dharam samaj college Aligarh)<br/>60.38%</td>
          <td>Dr A P J Abudul kalam University Lucknow<br/>(Aligarh college of engineering and technology)<br/>74.55%</td>
        </tr>
        <tr>
            <th colSpan={5}>Personal Detail</th>
        </tr>
        <tr>
          <td>4</td>
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>DOB</th>
          <th>Marital status</th>
        </tr>
        <tr>
          <td>5</td>
          <td>Saudan singh</td>
          <td>Radha devi</td>
          <td>02-02-1998</td>
          <td>Married</td>
        </tr>
        <tr>
            <th colSpan={5}>Computer skill</th>
        </tr>
        <tr>
          <td>6</td>
          <td>C Programming</td>
          <td>HTML,CSS</td>
          <td>Java script,React js</td>
          <td>Bootstrap,Jquery <br/> <NavLink className='m' to='/'>Go To Home</NavLink></td>
         
        </tr>
       
      </tbody>
     
    </Table>
 
        </div>
    )
}export default Resume;