import FormComponent from './FormComponent'
import QuestionBoxComponent from './QuestionBoxComponent'
import $ from 'jquery'

class ContentComponent extends React.Component {
    
    constructor(props,context){
        super(props,context)

        this.state={
            questions:[]
        }
    }
    getQuestions(){
        let that = this
        $.ajax({
            url:that.props.url,
            dataType:'json',
            success(results){
                that.setState({
                    questions:results
                })
            }
        })
    }

    componentWillMount(){
        this.getQuestions()
    }

    render(){
        let {isFormShow} = this.props
        let {questions} = this.state
        return (
            <section className="container-fluid">
                <div className="main-box">
                    <FormComponent  isFormShow={isFormShow}/>
                    <QuestionBoxComponent questions={questions}/>
                </div>
            </section>                                               
        )
    }
}
//定义默认属性
ContentComponent.defaultProps={
    url:'./json/question.json'
}



export default ContentComponent