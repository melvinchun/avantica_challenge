import React, { Fragment, useEffect, useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { AppContext } from '../context/context';

import GameHeader from '../components/GameHeader';
import GameDragDrop from '../components/GameDragDrop';

const Game: React.FC<RouteComponentProps> = ({ history }) => {

    const context = useContext(AppContext);
    const { user, timerStarted, addTimer, timer } = context;

    useEffect(() => {
        if(!user) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let interval:any = null;
        if (timerStarted) {
          interval = setInterval(() => {
            addTimer(1);
          }, 1000);
        } 
        return () => clearInterval(interval);
        // eslint-disable-next-line
      }, [timerStarted, timer]);

    return (
        <Fragment>
            <Container className="home-container min-vh-100 d-flex flex-column">
                <GameHeader />
                <GameDragDrop />
            </Container>
        </Fragment>
    )
}

export default Game