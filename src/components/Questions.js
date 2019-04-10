import React from "react";
import QuestionOption from './QuestionOption'

class Questions extends React.Component {
constructor(props){
  super(props)
  this.optionRef = React.createRef();

  // this.state={
  //   options: []
  // }
}

handleOptionClick = e => {
  e.preventDefault()
  console.log(this.optionRef.current.value)
  console.log(this.state.options)
  // const options = this.state.options.concat(this.optionRef.current.value)
  const options = this.state.options
  console.log(options)

  this.setState({
    options: options.concat([this.optionRef.current.value])
  })

}
//   // if(this.props.options.length < 1) {
//   //   // console.log(options)
//   //   this.setState({
//   //     options: options
//   //   })``
//   // } else if (this.props.options.length > 1) {
//   //   // var options = this.props.options.concat(this.optionRef.current.value  )
//   //   this.setState({
//   //     options: options
//   //   })
//   // }
//   // if (Object.keys(this.state).includes(this.optionRef.current.name)) {
//   //   this.setState({
//   //     [this.optionRef.current.name]: [this.optionRef.current.value]
//   //   })
//   // } else {
//   //   this.setState({
//   //     [this.optionRef.current.name]: [this.optionRef.current.value]
//   //   })
//   // }
//   //
//   this.optionRef.current.value = null
// };

  render() {

    return (
      <div className="question-form">
        <form>
          <input
            type="text"
            className="question-title"
            name={`questionTitle${this.props.question}`}
            placeholder="Question?"
            onChange={this.props.handleQuestionChange}
          />
          <input
            type="text"
            className="question-description"
            name={`questionDescription${this.props.question}`}
            placeholder="Question Description (Optional)"
            onChange={this.props.handleQuestionChange}
          />
          {/* {this.state.options.map(option => {
            return <QuestionOption option={option}/>
          })} */}
          <input
            type="text"
            className="question-option"
            name={`questionOption${this.props.question}`}
            placeholder="Add options"
            ref={this.props.optionRef}
            onChange={this.props.handleQuestionChange}
          />
          <button onClick={this.props.handleOptionClick}>Add option</button>
          <button onClick={this.props.handleDeleteClick} name={this.props.question}>Delete question</button>
        </form>
      </div>
    );
  }
}

export default Questions;
