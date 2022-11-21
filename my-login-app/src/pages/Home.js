import React from 'react'
import Card from 'react-bootstrap/Card';
import './pages.css';


function Home() {
  return (
    <div>
     <h1 className='homecss'>Home Page!</h1>
      <Card style={{ width: '30rem' }} className='cardstyle'>
      <Card.Img variant="top" src="https://static8.depositphotos.com/1594308/1073/i/450/depositphotos_10732016-stock-photo-professional-team.jpg" className='center' />
      <Card.Body>
        <br/>
        <Card.Title className='titlewelc'>This is a web-page in react!</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

        </Card.Text>
     
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
