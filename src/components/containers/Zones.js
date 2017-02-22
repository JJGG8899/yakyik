import React, { Component } from 'react';
import Zone from '../presentations/Zone';
import superagent from 'superagent';

class Zones extends Component {
  constructor(){
    super()
    this.state = {
      zone: {
        name:'',
        zipCodee:''
      },
      list:[]
      // list:[
      //   {name:'Zone 1', zipCode:'10012', numComments: 10},
      //   {name:'Zone 2', zipCode:'10013', numComments: 20},
      //   {name:'Zone 3', zipCode:'10014', numComments: 30},
      //   {name:'Zone 4', zipCode:'10015', numComments: 40}
      // ]
    }
  }

  componentDidMount(){
    console.log('componentDidMount');

    superagent
    .get('/api/zone')
    .query(null)
    .set('Accept','application/json')
    .end((err, response) => {
      if(err){
        alert('ERROR: ' + err);
        return;
      }
      // console.log(JSON.stringify(response.body));
      let results = response.body.results;
      this.setState({
        list: results
      })
    })
  }

  updateZone(e){
    // console.log("UpdateZone: " + e.target.id + " == " + e.target.value);
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[e.target.id] = e.target.value;
    this.setState({
      zone: updatedZone
    });
  }
  submitZone(e){
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.zone);
    this.setState({
      list: updatedList
    });
  }

  render(){
    const listItems = this.state.list.map((zone, i) => {
      return(
        <li> <Zone zone={zone} /></li>
      )
    })
    return(
      <div>
        <ol>
          {listItems}
        </ol>
        <input
          id="name"
          onChange={this.updateZone.bind(this)}
          className="form-control"
          type="text"
          placeholder = "Name" />
        <input
          id="zipCode"
          onChange={this.updateZone.bind(this)}
          className="form-control"
          type="text"
          placeholder = "Zip Code" />
        <button
          onClick = {this.submitZone.bind(this)}
          className="btn btn-danger">
          Submit
        </button>
      </div>
    )
  }
}

export default Zones;
