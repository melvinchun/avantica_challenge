import React, { Fragment, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import { AppContext } from '../context/context';

const GameHeader: React.FC = () => {

    const context = useContext(AppContext);
    const { user, timer } = context;

    return (
        <Fragment>
            <Row className="header-container py-4">
                <Col className="greet-container" xs={12}>
                    <h1>Good Luck, {user}!</h1>
                </Col>
                <Col className="timer-container text-right" xs={12}>
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