import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const CardProjeto = ({ }) => {
    return (
        <>
            <Card className="shadow" style={{ textAlign: 'center', borderStyle: 'solid' }}>
                <Card.Img className="w-100 d-block" />
                <Card.Body>
                    <h4 className="card-title" style={{ textAlign: 'center' }}>Titulo</h4>
                    <Container style={{ marginBottom: '10px' }}>
                        <img style={{ margin: '6px' }} />
                        <img style={{ margin: '6px' }} />
                        <img style={{ margin: '6px' }} />
                    </Container>
                    <Button variant="primary" type="button">Ver detalhes</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardProjeto;
