export const CHANGE_NAME = 'CHANGE_NAME';

export function changeName(e)  {
    return {
        type: 'CHANGE_NAME',
        payload: e.currentTarget.value
    }
}
