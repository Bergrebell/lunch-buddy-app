export function changeName(e)  {
    return {
        type: 'CHANGE_NAME',
        payload: e.currentTarget.value
    }
}
