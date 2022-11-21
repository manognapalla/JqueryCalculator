import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pages.css';


function Aboutus() {
  return (
    <div>
    <h1 className='homecss'>About Us!</h1>
     <Card style={{ width: '30rem' }} className='cardstyle'>
     <Card.Img variant="top" src="https://usabilitygeek.com/wp-content/uploads/2019/02/psychology-web-design-00-lead.jpg" className='center' />
     <Card.Body>
       <br/>
       <Card.Title className='titlewelc'>Learn more about us!</Card.Title>
       <Card.Text>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

       </Card.Text>
    
     </Card.Body>
   </Card>
   </div>

    

    
    
  )
}

export default Aboutus
