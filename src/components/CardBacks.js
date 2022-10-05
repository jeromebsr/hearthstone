import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Card } from 'react-bootstrap';

function CardBacks() {
    const [cardBacks, setCardBacks] = useState([]);

    useEffect(() => {
        axios
        .get("https://us.api.blizzard.com/hearthstone/cardbacks?sort=dateAdded%3Adesc&order (deprecated)=desc&access_token=USU5UdMqQlx0TIt5RKDp6srBLexd27c5zD")
        .then((res) => setCardBacks(res.data.cardBacks))
    }, [])

    console.log(cardBacks)

    return (
        <Container>
            <h1 className='text-center text-uppercase mt-5 mb-5'>Dos de Carte</h1>
            <Row>
                {
                    cardBacks.map((card, index) => (
                        <Card 
                            key={index}
                            className="bg-dark text-white text-center" 
                            style={{ width: "18rem" }}
                        >
                            <Card.Img 
                                variant="top"
                                src={card.image} 
                            />
                                <Card.Body>
                                    <Card.Title>
                                        <h2>{card.name.fr_FR}</h2>
                                    </Card.Title>
                                    
                                    <Card.Text className='mt-3'>
                                        {card.text.fr_FR}
                                    </Card.Text>
                                </Card.Body>
                            <Card.Footer className="text-center">
                                Button
                            </Card.Footer>
                        </Card>
                    ))
                }
            </Row>
        </Container>
    );
}

export default CardBacks;