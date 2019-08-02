import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroup';

import './CardTemplate.css';

const CardTemplate = (props) => {

    console.log(props.list.id);

    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.list.owner.avatar_url} />
             <Card.Body>
             <Card.Title>{props.list.name}</Card.Title>
             <Card.Text>
               {props.list.description}
              </Card.Text>
             </Card.Body>
             <ListGroup className="list-group-flush">
             
              <ListGroupItem>{props.list.id}</ListGroupItem>
              <ListGroupItem>Stars : {props.list.stargazers_count}</ListGroupItem>
              <ListGroupItem>Forks : {props.list.forks}</ListGroupItem>
             </ListGroup>
             <Card.Body>
              <Card.Link href={props.list.owner.html_url}>Repo Link</Card.Link>
              <Card.Link href={props.list.clone_url}>Clone It</Card.Link>
             </Card.Body>
            </Card>         
        // <div className='card_wrapper'>
        //     {/* <h1>{props.list.id}</h1>
        //     <h1>{props.list.name}</h1>
        //     <h1>{props.list.owner.avatar_url}</h1>
        //     <h1>{props.list.owner.html_url}</h1>
        //     <h1>{props.list.stargazers_count}</h1>
        //     <br></br>
        //     <br></br> */}

        //     <div class="container">
        //     {/* <h2>Card Image</h2> */}
        //         <p>{props.list.id}</p>
        //         <div class="card" >
        //         <img class="card-img-top" src={props.list.owner.avatar_url} alt="Card image" ></img>
        //         <div class="card-body">
        //             <h4 class="card-title">{props.list.name}</h4>
        //             <p class="card-text">{props.list.stargazers_count}</p>
        //             <a href={props.list.owner.html_url} class="btn btn-primary">See Repo</a>
        //         </div>
        //         </div>
        //     </div>

        // </div>
    );

}

export default CardTemplate;