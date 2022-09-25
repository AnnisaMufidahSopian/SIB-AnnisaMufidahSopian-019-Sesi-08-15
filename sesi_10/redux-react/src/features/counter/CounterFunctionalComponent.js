import {useSelector, useDispatch} from "react-redux"
import{
    increment,
    decrement,
    incrementByAmount
}from './CounterSlice'
import {useState} from 'react'

const CounterFunctionalComponent = () =>{
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0

    return(
        <div className="demo">
            <h1>Function Compnent Counter</h1>
            <h1 id="counter">{count}</h1>
            <button id="decrement" onClick={() => dispatch(decrement())}>-</button> {' '}
            <button id="increment" onClick={() => dispatch(increment())}>+</button> {' '}
            <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />

        <button id="increment" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        </div>
    )
}

export default CounterFunctionalComponent