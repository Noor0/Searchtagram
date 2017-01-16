import React from "react";
import styled from "styled-components";


const colors=["#fff741","#ecf0f1","#AEC6CD","#FDE3A7"," #ECECEC","#C8F7C5","#F9F8F8", "#E4F1FE"]

let Container = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	flex-direction:column;
	width:100%;
	/*background-color: ${colors[Math.floor(Math.random()*8)]};*/
	background-color:#F9F8F8;
	height:100%;
	
`;

let Span = styled.span`
	color:#274E7E;
	font-family: 'Cookie', cursive;
	&::selection{
		background-color:#BF4047;
	}
`;

let HeaderText = styled.h1`
	/*background-color:white;
	transition: box-shadow .25s ease;
	box-shadow: 9px 8px 5px -5px rgba(0,0,0,0.75);
	padding:10px 20px;
	border-radius:5px;*/
	margin:2px;
	cursor:default;
	visibility:hidden;

	&::selection{
		background-color:rgba(200,100,90,.7);
	}

	&:hover{
		/*box-shadow: 15px 13px 5px -5px rgba(0,0,0,0.75);*/
	}
`;

let CommonDiv = styled.div`
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:${props => props.flexJ};
	flex:${props => props.flex};
	background-color:${props => props.bg}
`;

let Link = styled.a`
	text-decoration:none;
	display:block;
	font-size:18px;
	font-weight:bold;
	color:#5da0f1;
	visibility:hidden;
`;

export default class Header extends React.Component{
	render(){
		return(
			<Container>
				<CommonDiv flexJ="flex-end" flex={1}>
					<HeaderText id="title" >Searchta<Span>gram</Span></HeaderText>
				</CommonDiv>
				<CommonDiv flexJ="flex-start" flex={1}>
					<h3 style={{visibility:"hidden"}} id="h3" >Search for images on instagram using google maps</h3>
					{/*<Link id="link" href="https://api.instagram.com/oauth/authorize/?client_id=9cb8ce638c604b67a9e061e5cc0cab37&redirect_uri=http://127.0.0.1:8887/&response_type=token&scope=public_content">Login to Instagram</Link>*/}
				</CommonDiv>
			</Container>
		);
	}

	componentDidMount(){
		let elems= [
			document.getElementById("h3"),
			document.getElementById("title")
		];

		setTimeout(()=>{
			elems.forEach((elem,ind)=>{
				elem.style.visibility="visible"
				if(ind == [1])
					elem.className+=" animated fadeInDown ";
				else
					elem.className+=" animated fadeInUp ";
			});
		},800);
	}
}