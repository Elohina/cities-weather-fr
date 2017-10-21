import {Action} from '@ngrx/store';

export const CitiesActionTypes = {
    UPDATE_CITIES_WHEATHER: '[Cities] Update cities wheather',
    UPDATE_SUCCESS: '[Cities] Successfully updated wheather cities',
    UPDATE_FAILURE: '[Cities] Failed to load wheater cities'
};

export class UpdateWheatherAction implements Action {
    readonly type = CitiesActionTypes.UPDATE_CITIES_WHEATHER;
    constructor() {}
}

export class UpdateWheatherSuccessAction implements Action {
    readonly type = CitiesActionTypes.UPDATE_SUCCESS;
    constructor(public payload: any[]) {}
}

export class UpdateWheatherFailedAction implements Action {
    readonly type = CitiesActionTypes.UPDATE_FAILURE;
    constructor() {}
}

export type CitiesActions = UpdateWheatherAction | UpdateWheatherSuccessAction | UpdateWheatherFailedAction;
