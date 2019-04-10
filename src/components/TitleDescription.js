import React from "react";

const TitleDescription = props => {
  return (
    <div>
      <form>
        <input
          type="text"
          className="title"
          placeholder="Title"
          value={props.title}
          onChange={props.handleTitleChange}
        /><br/>
        <textarea
          type="comment"
          className="description"
          placeholder="Form Description"
          value={props.description}
          onChange={props.handleDescriptionChange}

        />
      </form>
    </div>
  );
};

export default TitleDescription;
