import React , { Component } from 'react';
import styles from './styles';

class Zone extends Component {
  render(){
    const style = styles.zone;
    return(
      <div style={style.container}>
        <h2 style={style.header}>
          <a href="#" style={style.title}>
          {this.props.zone.name}
          </a>
        </h2>
        <span className="detail"> {this.props.zone.zipCodes} </span><br />
        <span className="detail">  {this.props.zone.numComments} comments </span>
      </div>
    )
  }
}

export default Zone;
