import { useState } from "react"

const CounterButton = (props) => {
   const [count, setCount] = useState(0);

    return(
        (<button onClick={() => {
             props.onClick()
        }}>Count is {props.count}</button>)
    )
}

export default CounterButton