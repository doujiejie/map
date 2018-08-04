import React from 'react'
import GoogleMap from './googlemap.js'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component{

	render(){
	const { positionData } = this.props;
	console.log(positionData)
		if(!this.props.loaded){
			return <div>Loading...</div>
		}
		return(
			<div className="mapContainer">
				<GoogleMap 
					google = {this.props.google}
					positionData = { positionData }
				/>
			</div>
		)
	} 
}

export default GoogleApiWrapper({
	apiKey:'AIzaSyB8A9ayd3v75pU2QAnOAh1SMBidZ9dfieo'
})(MapContainer)