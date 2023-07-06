import {createStore} from 'redux';

const initialState = {
    counter: 0,
    toggle : false
}

function reducerFunction(state=initialState, action) {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            toggle : state.toggle
        }
    } else if (action.type == 'decrement') {
        return {
            counter: state.counter - 1,
            toggle : state.toggle
        }
    } else if (action.type == 'toggle') {
        return {
            counter: state.counter,
            toggle : !state.toggle
        }
    }

    return state;
}

const store = createStore(reducerFunction);

export default store;
