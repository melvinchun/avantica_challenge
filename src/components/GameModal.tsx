import React, { useState, useContext, useEffect } from 'react'
import { Modal } from 'react-bootstrap';

import { AppContext } from '../context/context';

interface GameModalProps {
    onResetGame: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ onResetGame }) => {

    const context = useContext(AppContext);
    const { timer, user, modalDisplayed, setModal } = context;

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if(modalDisplayed) {
            setSeconds(10);
        }
        // eslint-disable-next-line
    }, [modalDisplayed]);

    useEffect(() => {
        let interval:any = null;
        if (seconds > 0) {
          interval = setInterval(() => {
            setSeconds(seconds - 1);
          }, 1000);
        } 
        if (seconds === 0) {
            onResetGame();
            setModal(false);
        }
        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, [seconds]);

    return (
        <Modal
            show={modalDisplayed}
            centered
            backdrop='static'
        >
            <Modal.Header>
                <Modal.Title>Our Logo is Great Again!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{user}, your score: {timer} seconds</p>
            </Modal.Body>
        </Modal>
    )
}

export default GameModal
