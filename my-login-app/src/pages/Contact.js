import React from 'react'
import Card from 'react-bootstrap/Card';
import './pages.css';
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
    <div>
      <h1 className='homecss'>Contact Us</h1>
      <Card style={{ width: '30rem' }} className='cardstyle'>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1271752802/photo/phone-and-e-mail-icons-on-wooden-cubes-with-contact-us-text-on-blue-background-web-page.jpg?s=612x612&w=0&k=20&c=dk9oPaDy_L9mv_icOMgsFGzEDrX0NUI3I8xBQ-DAxQM=" className='center' />
      <Card.Body>
        <br/>
        <Card.Title className='titlewelc'>Find us below!</Card.Title>
        <Card.Text className='titlewelc'>
          Email: contactus@org.com
        </Card.Text>
        <Card.Text className='titlewelc'>
          Tel: +1-857-777-6288
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default Contact
