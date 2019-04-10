import React, { Component } from "react";
import TitleDescription from "./components/TitleDescription";
import Questions from "./components/Questions";
import QuestionText from "./components/QuestionText";
import QuestionDescription from "./components/QuestionDescription";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      counter: [],
      options: []
    };

    this.optionRef = React.createRef();
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleQuestionClick = e => {
    e.preventDefault();

    const counter = this.state.counter[this.state.counter.length - 1] === undefined ? 1 : this.state.counter[this.state.counter.length - 1] + 1
    const questions = this.state.counter.concat(counter);
    this.setState({
      counter: questions
    });
  };

  handleQuestionChange = e => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  filterQuestionObject = obj => {
    const myArray = Object.keys(obj);
    const newArray = myArray.filter(
      name =>
        name.includes("questionTitle") || name.includes("questionDescription")
    );
    // console.log(newArray)
    return newArray;
  };

  handleOptionClick = e => {
    e.preventDefault();
    const options = this.state.options;

    this.setState({
      options: options.concat({
        [this.optionRef.current.name]: [this.optionRef.current.value]
      })
    });

    this.optionRef.current.value = null;
  };
  handleDeleteClick = (e) => {
    e.preventDefault();
    const counter = this.state.counter
    console.log(counter)
    console.log(e.target.name)
    const newCounter = counter.filter(c => c!=e.target.name)
    this.setState({
      counter: newCounter

    })
  };

  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <div className="form-container">
          <div className="title-description-form">
            <div>
              <TitleDescription
                title={this.state.title}
                description={this.state.description}
                handleTitleChange={this.handleTitleChange}
                handleDescriptionChange={this.handleDescriptionChange}
              />
            </div>
          </div>
          <div className="question-form-container">
            {this.state.counter.map((num, id) => {
              return (
                <Questions
                  question={num}
                  key={id}
                  questionTitle={this.state.questionTitle}
                  questionDescription={this.state.questionDescription}
                  handleQuestionChange={this.handleQuestionChange}
                  handleOptionClick={this.handleOptionClick}
                  handleDeleteClick={this.handleDeleteClick}
                  options={this.state.options}
                  optionRef={this.optionRef}
                />
              );
            })}
          </div>
          <div>
            <button
              className="question-button"
              onClick={this.handleQuestionClick}
            >
              Add question
            </button>
          </div>
        </div>
        <div className="text-container">
          <h1>{this.state.title}</h1>
          <p>{this.state.description}</p>
          {this.filterQuestionObject(this.state).map((question, id) => {
            return (
              <div key={id}>
                {question.includes("questionTitle") ? (
                  <QuestionText text={this.state[question]} />
                ) : (
                  <QuestionDescription text={this.state[question]} />
                )}
              </div>
            );
            // <QuestionText question={question} />
            // console.log(this.state[question])
          })}
        </div>
      </div>
    );
  }
}

export default App;
