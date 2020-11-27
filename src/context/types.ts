export enum ActionTypes {
    SET_USER = "SET_USER",
}

export type Action = {
    type: ActionTypes;
    payload?: string;
}

export interface ContextData {
    user: string;
    setUser: (user: string) => void;
}
