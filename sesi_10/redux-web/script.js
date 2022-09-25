const initialState = {
    counter:0
}

const counter = (state = initialState, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {counter: state.counter + 1}
        case "DECREMENT":
            return {counter: state.counter - 1}
        default:
            return state
    }
}

const store = Redux.createStore(counter)

const el = document.getElementById('counter')
const render = () => {
    el.innerHTML = store.getState().counter.toString()
}

render()
store.subscribe(render)

const incEl = document.getElementById('increment')
const decEl = document.getElementById('decrement')

incEl.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

decEl.addEventListener('click', () => {
    store.dispatch({type: 'DECREMENT'})
})