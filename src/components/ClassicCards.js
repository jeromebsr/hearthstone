import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Markup } from 'interweave';
import { Button } from 'react-bootstrap';

function ClassicCards() {
    const [metaData, setMetaData] = useState([]);
    const [cardsData, setCardsData] = useState([]);
    const [currentClass, setCurrentClass] = useState("");
    const [rangeValue, setRangeValue] = useState(40);
    const [rarity, setRarity] = useState("");
    const [variant, setVariant] = useState("primary");
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get(`https://eu.api.blizzard.com/hearthstone/cards?locale=fr_FR&set=1646&class=${currentClass}&rarity=${rarity}&textFilter=${search}&pageSize=${rangeValue}&sort=manaCost&access_token=USU5UdMqQlx0TIt5RKDp6srBLexd27c5zD`)
            .then((res) => setCardsData(res.data.cards))

        axios
            .get("https://eu.api.blizzard.com/hearthstone/metadata?locale=fr_FR&access_token=USU5UdMqQlx0TIt5RKDp6srBLexd27c5zD")
            .then((res) => setMetaData(res.data))
    }, [currentClass, rangeValue, rarity, search])

    console.log(rarity)

    return (
        <Container>
            <h1 className='text-center text-uppercase mt-5 mb-5'>Cartes Classiques</h1>
            <Col className='mt-3 mb-3'>
            {
                metaData.classes && metaData.classes.map((classe, index) => (
                    <Button
                        key={index}
                        onClick={() => {
                            if(currentClass && currentClass === classe.slug) {
                                setCurrentClass("")        
                            } else {
                                setCurrentClass(classe.slug)
                            }
                        }}
                        style={{
                            marginRight: 10
                        }}
                    >
                        {classe.name}
                    </Button>
                ))
            }
            </Col>
            <Col className='mt-3 mb-3'>
                <input type="text" 
                    onChange={(e) => (setSearch(e.target.value))} 
                    placeholder="Rechercher une carte..."
                /> 
                <input 
                    type="range" 
                    min="1"
                    max="382"
                    defaultValue={rangeValue} 
                    onChange={(e) => setRangeValue(e.target.value)}  
                />
            </Col>
            <Col className='mt-3 mb-3'>
                {
                    metaData.rarities && metaData.rarities.map((rarities, index) => (
                        <Button
                            key={index}
                            variant={variant}
                            onClick={() => {
                                if(rarity && rarity === rarities.slug) {
                                    setRarity("") 
                                    setVariant("primary")       
                                } else {
                                    setRarity(rarities.slug)
                                    setVariant("danger")
                                }
                            }}
                            style={{
                                marginRight: 10
                            }}
                        >
                            {rarities.name}
                        </Button>
                    ))
                }
            </Col>
            <Col className='mt-3 mb-3'>
                Filtres : {rarity && rarity + ", "} {currentClass && currentClass}
            </Col>
            <Row>
                {
                    cardsData.map((card, index) => (
                        <Card 
                            key={index}
                            className="bg-dark text-white text-center" 
                            style={{ width: "18rem" }}
                        >
                            <a href={"/card/"+card.slug} title="Voir la carte">
                                <Card.Img 
                                    variant="top"
                                    src={card.image} 
                                />
                            </a>
                            <Card.Body>
                                <Card.Title>
                                    <h2>{card.name}</h2>
                                </Card.Title>
                                
                                <Card.Text className='mt-3'>
                                    <Markup content={card.text} />
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

export default ClassicCards;