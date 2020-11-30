import React, { Fragment } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Col } from 'react-bootstrap';

interface GameSlotProps {
    id: string
}

const GameSlot: React.FC<GameSlotProps> = ({ id, children }) => {
    return (
        <Fragment>
            <Droppable droppableId={id}>
                { 
                    (provided)=> (
                        <Col {...provided.droppableProps} ref={provided.innerRef}>
                            <div className={children ? 'game-slot' : 'game-slot dashed'}>
                                {children}
                                {provided.placeholder}
                            </div> 
                        </Col>
                    )
                }
            </Droppable>
        </Fragment>
    )
}

export default GameSlot
