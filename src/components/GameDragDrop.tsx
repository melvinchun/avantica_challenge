import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

interface GameDragDropProps {
}

const GameDragDrop: React.FC<GameDragDropProps> = () => {

    return (
        <Fragment>
            <Row className="dd-text-container">
                <Col>
                    <h1>Pick up the right cards</h1>
                </Col>
                <Col className="text-right">
                    <h1>The faster the better!</h1>
                </Col>
            </Row>
            <Row className="dd-game-container">
                <Col>
                    
                </Col>
            </Row>
        </Fragment>
    )
}

export default GameDragDrop