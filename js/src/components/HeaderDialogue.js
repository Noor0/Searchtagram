import React from 'react';

export default class HeaderDialogue extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
  	let conf={
			width:"100%",
      height:"50px",
      top:"0px",
      left:"0px",
      textAlign:"center",
      position:"fixed",
      visibility:"hidden",
      color:"white",
      backgroundColor:"#34495e",
      float:"left",
      margin:"auto",
      zIndex:"100",
      paddingTop:"25px",
      fontWeight:"bold"
  	}
    return (
      <p style={conf} id="p">If images aren't being fetched then access_token has probably expired, to get a new access_token you'll need to authenticate on instagram</p>
    );
  }

  componentDidMount(){
    setTimeout(()=>{
      let p = document.getElementById("p");
      p.style.visibility="visible";
      p.className="animated fadeInDown"
      setTimeout(()=>{
        p.className="animated fadeOutUp"
      },10000);
    },8000);
  }

}
