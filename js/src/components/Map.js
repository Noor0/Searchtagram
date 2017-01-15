import React, {Component} from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import store from "../Store";
import {fetchImagesFromLocationIdThunk} from "../Actions";

let Container = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	position :relative;
	flex:1;
	width:100%;
	height:100%;
	padding:20px;
	box-sizing:border-box;
	margin-top:10px;
`;

let MapDiv = styled.div`
	width:90%;
	height:500px;
	flex:8;
`;

let InputDiv = styled.div`
	flex:1;
	display:flex;
	justify-content:center;
	align-items:center;
	padding:5px 0px;
	width:100%;
`;

let Input = styled.input`
	padding: 10px;
	border: none;
	border-bottom: solid 2px #c9c9c9;
	transition: border 0.3s;
	font-size: 24px;
	transition: box-shadow .25s ease;
	box-shadow: 5px 4px 5px -5px rgba(0,0,0,0.75);
	width:600px;

	&:focus{
		border-bottom: solid 2px #969696;
		outline: none;
		box-shadow: 8px 6px 5px -5px rgba(0,0,0,0.75);
	}
`;

export default class GoogleMap extends Component{
	constructor(props) {
	  super(props);
	  this.location={
	  	lat: Math.floor(Math.random()*(30.3753-54.5260+1)+54.5260),
	  	lng:Math.floor(Math.random()*(15.2551-69+1)+69)
	  }
	}

	render(){
		return(
			<Container>
				<InputDiv>
					<Input ref={(inp)=>this.inp=inp} type="text" placeholder="Search" />
				</InputDiv>
				<MapDiv ref={(mapDiv)=> this.mapDiv=mapDiv}></MapDiv>
			</Container>
		);
	}

	componentDidMount(){
		let map = new google.maps.Map(ReactDOM.findDOMNode(this.mapDiv), {
      center: {lat: this.location.lat, lng: this.location.lng},
      zoom: 5,
      mapTypeId: 'roadmap'
    });

    let marker = new google.maps.Marker({
    	position:this.location,
    	map:map
    });

    map.addListener("click",(ev)=>{
    	marker.setPosition(ev.latLng);
    	let latLng={lat:ev.latLng.lat(),lng:ev.latLng.lng()};
    	store.dispatch(fetchImagesFromLocationIdThunk({AT:store.getState().accessToken,...latLng}));
    });

    let inp=ReactDOM.findDOMNode(this.inp);
    let searchBar = new google.maps.places.SearchBox(inp);

    searchBar.addListener("places_changed",(ev)=>{
    	let pos = searchBar.getPlaces()[0].geometry.location;
    	map.setCenter(pos);
    	marker.setPosition(pos);
    	let latLng={lat:pos.lat(),lng:pos.lng()};
    	store.dispatch(fetchImagesFromLocationIdThunk({AT:store.getState().accessToken,...latLng}));    	
    });
	}

}
	