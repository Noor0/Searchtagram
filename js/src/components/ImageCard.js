import React from 'react';
import Imgix from 'react-imgix';
import styled from "styled-components";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";


let Div=styled.div`
	background-image:url('${props=>props.url}');
	background-size:100% 100%;
  background-position:center;
	height:270px;
	width:100%;
	background-repeat:no-repeat;
`;

let StatPanel= styled.div`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  display: none;
  width:100%;
  flex:1;
  background-color:white;
`;

let Image_Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  position: relative;
  margin: 10px;
  background-color:white;
`;

let ImageDiv = styled.div`
  display: flex;
  flex: 9;
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow:hidden;
`;

let Img = styled.img`
	display:none;
	max-width:300px;
  max-height:270px;
  width: auto;
  height: auto;
`;

export default class ImageCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  	return (
      <Image_Card>
      	<ImageDiv>
      		<a href={"http://instagram.com/p/"+this.props.code}>
      			<Img style={{}} onLoad={this.fadeItIn.bind(this)} ref={(id)=>{this.ID=id;}} src={this.props.url} />
   					<FontAwesome ref={spnr => {this.spnr=spnr}} spin name="circle-o-notch" />
      		</a>
      	</ImageDiv>
      	<StatPanel ref={(sp)=>{this.SP=sp}} >
            <span style={{fontWeight:"bold",color:"red"}}><FontAwesome name="heart" /> {this.props.likes}</span>
      		  <span style={{fontWeight:"bold",color:"steelblue"}}><FontAwesome name="comments" /> {this.props.comments}</span>
      	</StatPanel>
      </Image_Card>
    );
  }

  fadeItIn(){
  	ReactDOM.findDOMNode(this.spnr).style.display="none";
    let elems = [
      ReactDOM.findDOMNode(this.ID),
      ReactDOM.findDOMNode(this.SP)
    ];
    
   //  if(elems[0].width <= elems[0].height && !elems[0].width <= 270){
   //  	let diff = elems[0].width - 270;
   //  	elems[0].width=270;
   //  	elems[0].height=elems[0].height-diff;
   //  }
   //  else{
   //  	if(elems[0].height <= elems[0].width && !elems[0].height <= 270){
	  //   	let diff = elems[0].height - 270;
	  //   	elems[0].height=270;
	  //   	elems[0].width-=diff;
   //  	}
  	// }
    elems.forEach((e,i)=>{
    	if (i == 0)
    		e.style.display="block";
    	else
      	e.style.display="flex";
      e.className+=" animated fadeIn ";
    });
    
  }
}

ImageCard.propTypes={
	code:React.PropTypes.string,
	url:React.PropTypes.string,
	likes:React.PropTypes.string,
	comments:React.PropTypes.string,
	caption:React.PropTypes.string
}