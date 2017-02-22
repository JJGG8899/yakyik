import React from 'react';

import Comment from '../presentations/Comment';
import styles from './styles';

class Comments extends React.Component {
  constructor(){
    super();
    this.state = {
      comment:{
        username:'',
        body:'',
        timestamp:''
      },
      list: [
        {body:'comment 1', username:'dtrupm', timestamp:'10:30'},
        {body:'comment 2', username:'hcliton', timestamp:'11:30'},
        {body:'comment 3', username:'gjohnson', timestamp:'12:30'}
      ]
    }
  }
  submitComment(){
    // console.log('submitComment: ' + JSON.stringify(this.state.comment));
    //1. Make a copy of value we want to change
    let updatedList = Object.assign([], this.state.list);
    //2. update this copy
    updatedList.push(this.state.comment);
    //3. set old state to the new one
    this.setState({
      list: updatedList
    });
  }
  updateUserName(e){
    // console.log(e.target.value);
    // you should never mutate a state
    // what you do is to create a copy, update copy, then set to copy
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['username'] = e.target.value;
    this.setState({
      comment: updatedComment
    });
  }
  updateComment(e){
    // console.log(e.target.value);
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['body'] = e.target.value;
    this.setState({
      comment: updatedComment
    });
  }
  updateTimeStamp(e){
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['timestamp'] = e.target.value;
    this.setState({
      comment: updatedComment
    });
  }
  render(){
    const commentsList = this.state.list.map((comment) => {
      return (
        <li> <Comment curComment = {comment} /> </li>
      );
    });
    // const commentsList = this.state.list.map(comment =>
    //   <li> <Comment curComment = {comment} /> </li>
    // )
    return(
      <div>
        <h2> Comments: Zone 1 </h2>
        <div style={styles.comment.commentBox}>
          <ul style={styles.comment.commentsList}>
            {commentsList}
          </ul>

          <input
            onChange = {this.updateUserName.bind(this)}
            className="form-control"
            type="text"
            placeholder="Username" />
          <input
            onChange = {this.updateComment.bind(this)}
            className="form-control"
            type="text"
            placeholder="Comment" />
          <input
            onChange = {this.updateTimeStamp.bind(this)}
            className="form-control"
            type="text"
            placeholder = "timestamp" />
          <button onClick={this.submitComment.bind(this)}
            className="btn btn-info"> Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
