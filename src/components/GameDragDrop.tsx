import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd'

import { GameSlotModel, DropResult, DraggableLocation } from '../models/Game';

import { AppContext } from '../context/context';

import GameCard from './GameCard';
import GameSlot from './GameSlot';
import GameModal from './GameModal';

import slotData from '../data/slots.json';
import emptySlotData from '../data/emptySlots.json';

interface stateModel {
    card: GameSlotModel[];
    empty: GameSlotModel[];
}

const GameDragDrop: React.FC = () => {

    const context = useContext(AppContext);
    const { timerStarted, addTimer, startTimer, endTimer, resetTimer, setModal } = context;

    const [gameSlots, setGameSlots] = useState<stateModel>({
        card: [],
        empty: []
    });

    useEffect(() => {
        setGameSlots({
            card: shuffleCards(slotData.map(a => ({...a}))),
            empty: emptySlotData.map(a => ({...a}))
        });
        // eslint-disable-next-line
    }, []);

    const shuffleCards = (cards: GameSlotModel[]): GameSlotModel[] => {
        let tempData = [...cards];
        let currentIndex = tempData.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = tempData[currentIndex];
          tempData[currentIndex] = tempData[randomIndex];
          tempData[randomIndex] = temporaryValue;
        }

        return tempData;
    }

    const checkGame = (): void => {
        const incorrectSlots = gameSlots.empty.filter((slot) => !slot.correct)
        if(incorrectSlots.length === 0){
            endTimer();
            setModal(true)
        }
    }

    const onResetGame = (): void => {
        setGameSlots({
            card: shuffleCards(slotData.map(a => ({...a}))),
            empty: emptySlotData.map(a => ({...a}))
        });
        resetTimer();
    }

    const onDragEnd = (res: object): void => {
        const result = res as DropResult; 
        const source: DraggableLocation = result.source;
        const destination: (DraggableLocation | null) = 
            result.destination ? result.destination : null;

        const fromTemp = source.droppableId.includes('card') ?
            gameSlots.card.filter((slot) => slot.id === source.droppableId) :
            gameSlots.empty.filter((slot) => slot.id === source.droppableId);

        let fromSlot: (GameSlotModel | null) = fromTemp ? fromTemp[0] : null;

        let toSlot: (GameSlotModel | null) = null;

        if(destination) {
            const toTemp = destination.droppableId.includes('card') ?
                gameSlots.card.filter((slot) => slot.id === destination.droppableId) :
                gameSlots.empty.filter((slot) => slot.id === destination.droppableId);

            toSlot = toTemp ? toTemp[0] : null;
        }
 
        if(fromSlot && toSlot) {
            const card = fromSlot.card;

            if(card) {
                if(!toSlot.card) {
                    if(!timerStarted) {
                        startTimer();
                    }
                    fromSlot.card = null;
                    toSlot.card = card;
                
                    if(toSlot.type === 'empty') {
                        if(card.type === toSlot.correctCard){
                            toSlot.correct = true;
                        } else {
                            toSlot.correct = false;
                            addTimer(10);
                        }
                    }

                    setGameSlots({
                        card: gameSlots.card,
                        empty: gameSlots.empty
                    });
                }
            }
        }
        checkGame();
    };

    return (
        <Fragment>
            <Row className="dd-text-container">
                <Col xs={12}>
                    <h1>Pick up the right cards</h1>
                </Col>
                <Col className="text-right" xs={12}>
                    <h1>The faster the better!</h1>
                </Col>
            </Row>
            <DragDropContext onDragEnd={onDragEnd}>
                <Row className="dd-game-container py-5">
                    { gameSlots.card &&
                        gameSlots.card.map((slot, index) =>
                            <GameSlot key={slot.id} id={slot.id}>    
                                { slot.card &&
                                    <GameCard card={slot.card} index={index} />
                                }                      
                            </GameSlot>      
                        )
                    }
                </Row>
                <Row className="dd-text-container mt-5">
                    <Col xs={12}>
                        <h1>
                            ...and drop them to make the logo great 
                            <span className="light-gray"> again!</span>
                        </h1>
                    </Col>
                </Row>
                <Row className="dd-game-container py-5">
                    { gameSlots.empty &&
                        gameSlots.empty.map((slot, index) =>
                            <GameSlot key={slot.id} id={slot.id}>    
                                { slot.card &&
                                    <GameCard card={slot.card} index={index} />
                                }                      
                            </GameSlot>      
                        )
                    }
                </Row>
            </DragDropContext>
            <GameModal onResetGame={onResetGame} />
        </Fragment>
    )
}

export default GameDragDrop