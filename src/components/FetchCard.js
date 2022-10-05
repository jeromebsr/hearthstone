import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Markup } from 'interweave';
import { useParams } from 'react-router-dom';
import { Container, Row, Card, Col } from 'react-bootstrap';

function FetchCard() {
    const [data, setData] = useState({});
    let id = useParams();
    
    useEffect(() => {
        axios
            .get(`https://eu.api.blizzard.com/hearthstone/cards/${id.idorslug}?locale=fr_FR&access_token=USU5UdMqQlx0TIt5RKDp6srBLexd27c5zD`)
            .then((res) => setData(res.data))
    }, [])
    
    console.log(data)

    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={6}>
                    <Card
                    className="bg-dark text-white text-center" 
                    style={{ width: "18rem" }}
                    >
                        <Card.Img 
                            variant="top"
                            src={data.image} 
                        />
                        <Card.Body>
                            <Card.Title>
                                <h2>{data.name}</h2>
                            </Card.Title>
                            
                            <Card.Text className='mt-3'>
                                <Markup content={data.text} />
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            Button
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={6}>
                    <h1>{data.name}</h1>
                    <Markup content={data.text} />
                    <p>Créée par : {data.artistName}</p>
                    <a href="/cardsclassic">Retour</a>
                </Col>
            </Row>
        </Container>
    );
}

export default FetchCard;