import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Col } from 'reactstrap';
import {Link} from 'react-router-dom'

const EventCard = (props) => (
    <div>
        <Col style={{marginTop:24, marginBottom:5}}>
            <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Link to={`/details/${props.name}`} ><Button>Detalhes</Button></Link>
                </CardBody>
            </Card>
        </Col>
        
    </div>
)

export default EventCard