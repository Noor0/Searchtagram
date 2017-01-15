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
  display: flex;
  width:100%;
  flex:1;
  background-color:white;
  visibility:hidden;
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
  visibility:hidden;
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
      			<Div ref={(id)=>{this.ID=id;}} url={this.props.url} />
      		</a>
      	</ImageDiv>
      	<StatPanel ref={(sp)=>{this.SP=sp}} >
            <span style={{fontWeight:"bold",color:"red"}}><FontAwesome name="heart" size="1x" /> {this.props.likes}</span>
      		  <span style={{fontWeight:"bold",color:"steelblue"}}><FontAwesome name="comments" /> {this.props.comments}</span>
      	</StatPanel>
      </Image_Card>
    );
  }

  componentDidMount(){
    let elems = [
      ReactDOM.findDOMNode(this.ID),
      ReactDOM.findDOMNode(this.SP)
    ];
    setTimeout(
      ()=>{
        elems.forEach((e)=>{
          e.style.visibility="visible";
          e.className+=" animated fadeIn ";
        })
      }, 2500);
    
  }
}

ImageCard.propTypes={
	code:React.PropTypes.string,
	url:React.PropTypes.string,
	likes:React.PropTypes.string,
	comments:React.PropTypes.string,
	caption:React.PropTypes.string
}