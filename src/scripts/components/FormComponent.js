
class FormComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    render(){
        let {isFormShow} = this.props
        return (
            
                <form className={isFormShow?'':'hidden'}>

                    <div className="form-group">
                        <label for="">标题:</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label for="">内容:</label>
                        <textarea cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="form-group btn-box">
                        <button className="btn btn-info">提交</button>
                        <button className="btn btn-default">取消</button>
                    </div>
                </form>
                                             
        )
    }
}
//定义默认属性
FormComponent.defaultProps={

}



export default FormComponent