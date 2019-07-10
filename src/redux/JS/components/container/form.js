import React from "react";
import { connect } from "react-redux";
import { addComment } from "../../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};

class ConnectedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    this.props.addComment({ title });
    this.setState({ title: "" });
  }
  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="title">Enter your comments below:</label>
          <textarea
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit">Comment</button>
        </div>
      </form>
    );
  }
}

const Form = connect(null,mapDispatchToProps)(ConnectedForm) 

export default Form;
