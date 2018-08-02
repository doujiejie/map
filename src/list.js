import React, { Component } from 'react';

class List extends Component {
    state = {
    	query: ""
    }
  render() {
  	const { data } = this.props;
  	const { query } = this.state;
    return (
    			<div className="search-list">
      				<div className="search-area">
     					<div className="search-bar">
       						<input type="text" className="serach-input" value="" placeholder="search the station (example : tokyo)"/>
       						<button className="search-btn">
       						</button>
       					</div>
       				</div>
       				<div className="list">
       					<ol className="list-ol">
       						<li key={data.id}>date.title</li>
       					</ol>
      				</div>
      			</div>
            )
  }
}

export default List;
