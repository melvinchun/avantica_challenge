export interface GameCardModel {
    id: string;
    type: string
}

export interface GameSlotModel {
    id: string;
    type: string;
    correctCard: string;
    correct?: boolean;
    card: (GameCardModel | null);
}

export type DropResult = {
    draggableId: string,
    type: string,
    reason: string,
    mode: string,
    combine?: string, 
    source: DraggableLocation
    destination?: DraggableLocation
}

export type DraggableLocation = {
    droppableId: string
    index: number
}