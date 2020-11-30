import React, { Fragment, useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { GameCardModel } from '../models/Game';

import zoovu_z from '../assets/images/zoovu-z.svg'
import zoovu_o from '../assets/images/zoovu-o.svg'
import zoovu_v from '../assets/images/zoovu-v.svg'
import zoovu_u from '../assets/images/zoovu-u.svg'

interface GameCardProps {
    card: GameCardModel;
    index: number;
}

const GameCard: React.FC<GameCardProps> = ({ card, index }) => {

    const [image, setImage] = useState('');

    useEffect(() => {
        switch (card.type) {
            case 'z':
                setImage(zoovu_z);
                break;
            case 'o':
                setImage(zoovu_o);
                break;
            case 'v':
                setImage(zoovu_v);
                break;
            case 'u':
                setImage(zoovu_u);
                break;
            default:
                break;
        }
    }, [card]);

    return (
        <Fragment>
            <Draggable draggableId={card.id} index={index}>
                { 
                    (provided) => (
                        <div 
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="card-container d-flex align-items-center justify-content-center"
                        >
                            { image && 
                                <img alt={`card-${card.type}`} src={image} />
                            }
                        </div>
                    )
                }
            </Draggable>
        </Fragment>
    )
}

export default GameCard
