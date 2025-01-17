import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './store/counterSlice';
function App() {
  const dispatch = useDispatch()
  const val = useSelector((state)=>state.counter.value)
  console.log('commented');
  
  return (
    <div className="App">
    hello redux {val}

    <button onClick={()=>dispatch(increment(6554))}>increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
