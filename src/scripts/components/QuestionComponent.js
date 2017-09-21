

class QuestionComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }

    render(){
        let {question} = this.props 
        return (

            <div className="question">
                <div className="btn-box">
                    <button className="btn btn-info"><span className="glyphicon glyphicon-chevron-up"></span></button>
                    <button className="btn btn-default">{question.hot}</button>
                    <button className="btn btn-info"><span className="glyphicon glyphicon-chevron-down"></span></button>
                </div>
                <div className="info">
                    <h3>{question.title}</h3>
                    <p>{question.content}</p>
                </div>
            </div>
                                              
        )
    }
}
//定义默认属性
QuestionComponent.defaultProps={

}



export default QuestionComponent