
import QuestionComponent from './QuestionComponent'
class QuestionBoxComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
          
        }
    }
    
    showQuestion(){
        let {questions} = this.props
        let arr = []
       if(questions.length){
           questions.forEach(function(question) {
               arr.push(<QuestionComponent question={question} />)
           });
       }
       return arr
    }
    render(){
        
        return (

                <div className="question-box">

                    {this.showQuestion()}

                </div>
                                              
        )
    }
}
//定义默认属性
QuestionBoxComponent.defaultProps={

}



export default QuestionBoxComponent