import React from 'react';
import ReactDOM from "react-dom";
import styled, {injectGlobal} from 'styled-components';
import GoogleMap from "./components/Map";
import Header from "./components/Header";
import ImageDisplayer from "./components/ImageDisplayer";
import store from "./Store";
import { loginAction } from "./Actions";

injectGlobal`
	body{
		padding:0px;
		margin:0px;
		position:absolute;
		width:100%;
		height:100%;
		top:0;
		left:0;
		width:100%;
		background-color:#F3F3F3;
		display:flex;
		flex-direction:row;
	}

	h1{
		font-size:124px;
		font-family: 'Cookie', cursive;
	}

	h2{
		font-family: 'Cookie', cursive;
	}

	*{
		font-family: 'Quicksand', sans-serif;
	}
`;

const Container = styled.div`
	position:absolute;
	width:100%;
	height:100%;
	flex:1;
	top:0;
	left:0;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    	top:[],
    	latest:[]
    };
    store.subscribe( ()=>{
    	let myState = store.getState();
    	this.setState({
    		firstFetchFlag: myState.firstFetchFlag,
    		top: myState.images.top,
    		latest: myState.images.latest
    	});
    } );
  }

  componentWillMount(){
  	let hash = window.location.hash;
  	if(hash != "" && hash.indexOf("access_token") >=0){
  		let accessToken = hash.substr(hash.lastIndexOf("access_token")+13, hash.length);
  		store.dispatch(loginAction(accessToken));
  		let origLoc=window.location.href.substr(0,window.location.href.indexOf("#access_token"));
  		window.history.pushState({loc:"home"},"logged in",origLoc);
  	}
  }

  render() {
  	let disp = this.state.firstFetchFlag ? <ImageDisplayer top={this.state.top} latest={this.state.latest} /> : null;
    return (
      <Container>
        <Header />
        <GoogleMap />
        {disp}
      </Container>
    );
  }

}


ReactDOM.render(<App />,document.getElementById("app"));