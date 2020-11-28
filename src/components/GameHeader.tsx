import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons'

interface GameHeaderProps {
    user: string;
    timer: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ user, timer }) => {

    return (
        <Fragment>
            <Row className="header-container py-4">
                <Col className="greet-container">
                    <h1>Good Luck, {user}!</h1>
                </Col>
                <Col className="timer-container text-right">
                    <h1>
                        <FontAwesomeIcon
                            icon={faClock}
                            color="#6AE7B2"
                        /> Your Score: {timer} seconds
                    </h1>
                </Col>
            </Row>
        </Fragment>
    )
}

export default GameHeader