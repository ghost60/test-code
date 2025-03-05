// 使用useEffect
function App(){
  useEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log('unmounted')
    }
  }, [])
  return <div>hello</div>
}
// 使用useContext
const ThemeContext = React.createContext('light')
function App(){
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  )
}
function Toolbar(){
  const theme = useContext(ThemeContext)
  return <div>{theme}</div>
}
// 使用useReducer
function reducer(state, action){
  switch(action.type){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
function App(){
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>dispatch({type: 'increment'})}>+</button>
      <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
    </>
  )
}
// 使用useMemo
function App(){
  const [count, setCount] = useState(0)
  const double = useMemo(()=>count*2, [count])
  return (
    <>
      <div>{double}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用useCallback
function App(){
  const [count, setCount] = useState(0)
  const handleClick = useCallback(()=>setCount(count+1), [count])
  return (
    <>
      <div>{count}</div>
      <button onClick={handleClick}>+</button>
    </>
  )
}
// 使用useRef
function App(){
  const inputRef = useRef()
  return (
    <input ref={inputRef}/>
  )
}
// 使用useLayoutEffect
function App(){
  useLayoutEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log('unmounted')
    }
  }, [])
  return <div>hello</div>
}
// 使用useImperativeHandle
function App(){
  const inputRef = useRef()
  useImperativeHandle(inputRef, ()=>({
    focus: ()=>inputRef.current.focus()
  }))
  return <input ref={inputRef}/>
}
// 使用useDebugValue
function useFriendStatus(friendID){
  const [isOnline, setIsOnline] = useState(null)
  useDebugValue(isOnline ? 'Online' : 'Offline')
  return isOnline
}
// 使用React.forwardRef
const FancyInput = React.forwardRef((props, ref)=>{
  return <input ref={ref}/>
})

// 使用React.forwardRef和useImperativeHandle
const FancyInput = React.forwardRef((props, ref)=>{
  useImperativeHandle(ref, ()=>({
    focus: ()=>ref.current.focus()
  }))
  return <input ref={ref}/>
})

// 手写一个useEffect
function useEffect(callback, deps){
  let lastDeps = []
  if (!lastDeps || deps.some((dep, i)=>dep !== lastDeps[i])) {
    callback()
    lastDeps = deps
  }
}
// 手写一个useContext
function useContext(context){
  return context._currentValue
}
// 手写一个useReducer
function useReducer(reducer, initialState){
  let state = initialState
  function dispatch(action){
    state = reducer(state, action)
  }
  return [state, dispatch]
}
// 手写一个useMemo
function useMemo(factory, deps){
  return factory()
}
// 手写一个useCallback
function useCallback(callback, deps){
  return callback
}
// 手写一个useRef
function useRef(){
  return {current: null}
}
// 手写一个useLayoutEffect
function useLayoutEffect(callback, deps){
  useEffect(callback, deps)
}
// 手写一个useImperativeHandle
function useImperativeHandle(ref, factory){
  ref.current = factory()
}
// 手写一个useDebugValue
function useDebugValue(value){
  console.log(value)
}
// 手写一个React.forwardRef
function forwardRef(factory){
  return {render: factory}
}
// 使用hooks模拟生命周期
function App(){
  useEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log('unmounted')
    }
  }, [])
  return <div>hello</div>
}
// 使用hooks模拟shouldComponentUpdate
function App(){
  const [count, setCount] = useState(0)
  const [double, setDouble] = useState(0)
  useEffect(()=>{
    setDouble(count*2)
  }, [count])
  return (
    <>
      <div>{double}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用hooks模拟componentDidCatch
function App(){
  const [error, setError] = useState(null)
  if (error) {
    return <div>{error}</div>
  }
  return <button onClick={()=>setError('error')}>error</button>
}
// 使用hooks模拟getSnapshotBeforeUpdate
function App(){
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(()=>{
    ref.current = count
  })
  return (
    <>
      <div>{ref.current}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用hooks模拟componentDidUpdate
function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('updated')
  }, [count])
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用hooks模拟componentWillUnmount
function App(){
  useEffect(()=>{
    console.log('mounted')
    return ()=>{
      console.log('unmounted')
    }
  }, [])
  return <div>hello</div>
}
// 使用hooks模拟componentDidMount
function App(){
  useEffect(()=>{
    console.log('mounted')
  }, [])
  return <div>hello</div>
}
// 使用hooks模拟componentWillMount
function App(){
  useEffect(()=>{
    return ()=>{
      console.log('unmounted')
    }
  }, [])
  return <div>hello</div>
}
// 使用hooks模拟componentWillReceiveProps
function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('updated')
  }, [count])
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用hooks模拟componentWillUpdate
function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('updated')
  }, [count])
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}
// 使用hooks模拟componentWillReceiveProps
function App(){
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log('updated')
  }, [count])
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

//编写一个自定义 Hook，用于封装可重用的逻辑。
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

function MyComponent() {
  const width = useWindowWidth();
  return <div>Window width: {width}</div>;
}