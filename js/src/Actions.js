import $ from "jquery";

export function loginAction(data){
	return{
		type:"LOGGED_IN",
		access_token:data
	};
}

export function fetchImagesFromLocationIdThunk(data){
	return (dispatch)=>{
		let locId;
		
		dispatch({
			type:"FETCHING_IMAGES"
		});

		let url=`https://api.instagram.com/v1/locations/search?lat=${data.lat}&lng=${data.lng}&access_token=${data.AT}`;

		$.ajax({
			url,
			type:"GET",
			crossDomain:true,
			dataType:"jsonp",
			success: successOnId.bind(null,dispatch)
		});
		
	}
}

function successOnId(dispatch,res){
	//console.log(res.data[0].id);
	let config={
		method:"GET",
		mode:"cors",
	};
	fetch(`http://searchtagramcom.000webhostapp.com/scrape.php?url=https://www.instagram.com/explore/locations/${res.data[0].id}`)
	.then( res => res.text() )
	.then( res => {dispatch({
		type:"FETCHED_IMAGES",
		data:JSON.parse(res)
	}) } )
	.catch(er => console.error(er));
}