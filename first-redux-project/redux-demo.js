const redux = require('redux');

const reducerFunction = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        };
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    if (action.type === 'multiply') {
        return {
            counter: state.counter * state.counter
        };
    };

    if (action.type === 'divide') {
        return {
            counter: state.counter / 2
        };
    };

    return state;
    
};

const store = redux.createStore(reducerFunction);

const subscribedFunction = () => {
    const state = store.getState();
    console.log(state)
}

store.subscribe(subscribedFunction);

store.dispatch({ type: "increment" });
store.dispatch({ type: "multiply" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "divide" });



