import React, { Fragment, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/context';

import GameHeader from '../components/GameHeader';

const Game: React.FC<RouteComponentProps> = ({ history }) => {

    const context = useContext(AppContext);
    const { user, timer } = context;

    useEffect(() => {
        if(!user) {
            // history.push('/')
        }
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Container className="home-container min-vh-100 d-flex flex-column">
                <GameHeader user={user} timer={timer}/>
            </Container>
        </Fragment>
    )
}

export default Game