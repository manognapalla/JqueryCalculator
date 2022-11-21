import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';


function Jobs() {
  return (
    <div>
        <div>
     <h1 className='homecss'>Come work for us!</h1>
     <Card style={{ width: '30rem' }} className='cardstyle'>
      <Card.Img variant="top" src="https://www.usnews.com/cmsmedia/65/cc/5e8e982e408db701f9e4725c88f5/210503-computerprogrammer-stock.jpg" className='center' />
      <Card.Body>
        <br/>
        <Card.Title className='titlewelc'>Software Development Intern, CA</Card.Title>
        <Card.Text>
         Job description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Card.Text>

        <Button variant="primary" className='buttoncss'>Apply Here!</Button>
     
      </Card.Body>
    </Card>
    </div>


    <Card style={{ width: '30rem' }} className='cardstyle'>
      <Card.Img variant="top" src="https://www.usnews.com/object/image/00000179-327e-da49-a57f-f67e62e20000/210503-softwaredeveloper-stock.jpg?update-time=1620049889805&size=responsive640" className='center' />
      <Card.Body>
        <br/>
        <Card.Title className='titlewelc'>Senior software Engineer, MA</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

        </Card.Text>
      
        <Button variant="primary" className='buttoncss'>Apply Here!</Button>
      
     
      </Card.Body>
    </Card>
    </div>
  )
}

export default Jobs
