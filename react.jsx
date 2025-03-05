// 写一个函数组件
function App() {
  return <div>hello</div>
}
// claa组件
class App extends React.Component {
  render(){
    return <div>hello</div>
  }
}
// 有状态组件
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  render(){
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={()=>this.setState({count: this.state.count + 1})}>+</button>
      </>
    )
  }
}
// 创建一个受控组件，处理表单输入
class App extends
React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  render(){
    return (
      <input value={this.state.value} onChange={this.handleChange}/>
    )
  }
}

// 写一个高阶组件
function HOC(WrappedComponent){
  return class extends React.Component {
    render(){
      return <WrappedComponent {...this.props}/>
    }
  }
}
// 使用高阶组件
const NewComponent = HOC(App)