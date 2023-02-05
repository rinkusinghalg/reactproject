import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Dsp.css'
function Condetail()
{
    return(
        <div className='contactdetail'>
            <h1 style={{color:'tomato'}}>some card create by me</h1>
            <h5 style={{color:'yellow'}}>this card create by me and support on my select from my owener and detect from each other </h5>
            <p>it can be also good communication and from select dadicate dfrom each othe rsystem and support on <br/>
            i want create new web page</p>
           

<div className='display-ind'>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="img6.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="img2.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src="img8.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
    )
}export default Condetail;