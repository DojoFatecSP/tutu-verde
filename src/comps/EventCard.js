import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const EventCard = (props) => (
    <div>
        <Col sm="6" style={{marginTop:24, marginBottom:5}}>
            <Card>
                <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <Button>Detalhes</Button>
                </CardBody>
            </Card>
        </Col>
        
    </div>
)

export default EventCard