import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import fetchImages from '../../store/actions';
import './style.scss';

function Layout(props) {
		props.imageGallery();
	return (
		<div>
			<ul className="images">
				{props.imageToShow.map((item,index) => 
				index<=20? (
					<li key={index}><Link to={`${props.match.url}images/${index}`}></Link><img src={item.url} alt={`images${index}`}/></li>
				):null
				)}
			</ul>		
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		userLoginState:state.userIndentity,
		imageToShow:state.images
	}
}

const mapDispatchToProps = (dispatch) => { 
return {
	imageGallery : () => {dispatch(fetchImages())}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);

