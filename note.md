```
class RootComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            doing:'吃饭'
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
    }
    goToStudy(){
        console.log(this)
        this.setState({
            doing:'学习..'
        })
    }
    render(){
        return (
            <div>
                
                <button onClick={this.goToStudy.bind(this)} type="button" className="btn btn-success">学习..</button>
                
                今天是个好日子--{this.props.a}--{this.state.doing}
            </div>
        )
    }
}
//定义默认属性
RootComponent.defaultProps={
    a:1
}



export default RootComponent
```