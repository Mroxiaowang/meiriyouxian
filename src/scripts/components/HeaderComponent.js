
class HeaderComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    render(){
        let {ToggleForm} = this.props
        return (
            <header className="container-fluid">
                <div className="main-box">
                    <h1>React问答</h1>
                    <button onClick={ToggleForm} className="btn btn-info">提问</button>
                </div>
                
            </header>
        )
    }
}
//定义默认属性
HeaderComponent.defaultProps={

}



export default HeaderComponent