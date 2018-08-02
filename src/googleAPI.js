import React from 'react'
import GoogleMap from './map.js'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class Container extends React.Component{

	render(){

		if(!this.props.loaded){
			return <div>Loading...</div>
		}

		return(
			<div className="map">
				<MAP google={this.props.google}/>
			</div>
		)
	} 
}

export default GoogleApiWrapper({
	apiKey:'AIzaSyB8A9ayd3v75pU2QAnOAh1SMBidZ9dfieo'
})(Container)//Container作为GoogleApiWrapper的子组件传入