import React from 'react';

class Comment extends React.Component {
  render(){
    return(
      <div style={{marginBottom: 16}}>
        <p style={{fontSize: 16, fontWeight: 600}}>
          {this.props.curComment.username}
        </p>
        <span> {this.props.curComment.body} </span>
        <span style={{marginLeft:12, marginRight:12}}>|</span>
        <span> {this.props.curComment.timestamp} </span>
        <hr />
      </div>
    );
  }
}

export default Comment;
