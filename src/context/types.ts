export enum ActionTypes {
    SET_USER = "SET_USER",
    START_TIMER =  "START_TIMER",
    RESET_TIMER =  "RESET_TIMER",
    END_TIMER =  "END_TIMER",
    ADD_TIMER =  "ADD_TIMER",
    SET_MODAL = "SET_MODAL"
}

export type Action = {
    type: ActionTypes;
    payload?: string | number | boolean;
}

export interface ContextData {
    user: string;
    timerStarted: boolean;
    timer: number;
    modalDisplayed: boolean;
    setUser: (user: string) => void;
    startTimer: () => void;
    resetTimer: () => void;
    endTimer: () => void;
    addTimer: (time: number) => void;
    setModal: (value: boolean) => void;
}

export interface AppProviderProps{
    testState?: Partial<ContextData>
}