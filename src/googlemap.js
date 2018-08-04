import React, { Component } from 'react';
import ReactDOM from 'react-dom'


	class GoogleMap extends React.Component{
	componentDidMount(){
		this.loadMap();
	}

	loadMap(){
		if(this.props && this.props.google){
			const {google} = this.props;

			const mapRef = this.refs.googlemap;//获取底层虚拟DOM
			const node = ReactDOM.findDOMNode(mapRef);

			let zoom = 12;
			let lat = 30.2743848;
			let lng = 120.1553389;
			const center = new google.maps.LatLng(lat,lng);
			const mapConfig = Object.assign({},{
				center:center,
				zoom:zoom
			})
			this.map = new google.maps.Map(node,mapConfig);
		}
	}

  render() {
  	const { positionData } = this.props;
  	console.log(positionData);
    return (
      <div ref='googlemap' className="map">
      </div>
    );
}
}
export default GoogleMap;
