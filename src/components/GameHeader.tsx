import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';

interface GameHeaderProps {
    user: string;
    timer: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ user, timer }) => {

    return (
        <Fragment>
            <Row>
                <Col>
                    <h1>Good Luck {user}!</h1>
                </Col>
                <Col>
                    <h1><i className="far fa-id-card"></i> Your Score: {timer} seconds</h1>
                </Col>
            </Row>

        </Fragment>
    )
}

export default GameHeader