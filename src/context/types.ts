export enum ActionTypes {
    SET_USER = "SET_USER",
    SET_TIMER =  "SET_TIMER"
}

export type Action = {
    type: ActionTypes;
    payload?: string | number;
}

export interface ContextData {
    user: string;
    timer: number;
    setUser: (user: string) => void;
    setTimer: (user: number) => void;
}
