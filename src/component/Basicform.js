import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import Outer from './Outer';

function Basicform()
{
    return(
        <>
       <div className='col-sm-4 offset-4 mt-4' style={{border:'2px solid red',backgroundColor:'skyblue'}}>
       
       <h1 style={{color:'blue'}}>Registration form</h1>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter name" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="number" placeholder="Enter Mob No." />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
      
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{marginBottom:"8px"}} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
    </div>
    <Outer/>
    </>
     
  );


        
    
}export default Basicform;