import React from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";

let Container = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:flex-start;
	width:100%;
	/*height:100%;*/
	background-color:#F9F8F8;
	box-sizing:border-box;
`;

let ImageDiv = styled.div`
	display:flex;
	flex-flow:row wrap;
	justify-content:flex-start;
	align-items:flex-start;
	padding:0px 30px;
	width:100%;
	box-sizing:border-box;
`;

let H2 = styled.h2`
	font-size:62px;
	color:steelblue
`;

let HeaderDiv = styled.div`
	display:flex;
	flex-direction:row;
	justify-content:center;
	align-items:center;
	padding:0px 30px;
	width:100%;
	flex:1;
	box-sizing:border-box;
`;

export default class ImageDisplayer extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Container>
				<HeaderDiv>
					<H2>Top posts</H2>
				</HeaderDiv>
				<ImageDiv>
					{this.props.latest.map((image)=>{
					return <ImageCard key={image.code} code={image.code} url={image.url} likes={image.likes} comments={image.comments} caption={image.caption} />
					})}
				</ImageDiv>
				<HeaderDiv>
					<H2>Most recent</H2>
				</HeaderDiv>
				<ImageDiv>
					{this.props.top.map((image)=>{
					return <ImageCard key={image.code} code={image.code} url={image.url} likes={image.likes} comments={image.comments} caption={image.caption} />
					})}
				</ImageDiv>
			</Container>
		);
	}
}

ImageDisplayer.propTypes={
	latest:React.PropTypes.arrayOf(React.PropTypes.object),
	top:React.PropTypes.arrayOf(React.PropTypes.object)
}

ImageDisplayer.defaultProps = {
  latest: [],
  top: []
}