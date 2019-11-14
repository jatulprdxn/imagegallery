import React,{useState} from 'react'
import { connect } from 'react-redux';
import uuid  from 'uuid';

const mapStateToProps = (state) => {
	return {
	uname:state.username,
	pwd:state.password,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUser:(id,state) => {dispatch({ type:"IS_USER_LOGIN",payload:{uniqueId:id,loginState:state}})}
	}
}

function Login(props) {
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
	
	
function handleUsername(e) {
	 setUsername(e.target.value);
	}

function handlePassword(e) {
	setPassword(e.target.value);
	}

function handleSubmit(e) {
	e.preventDefault();
	let id = uuid.v4();
	let state = true;
	localStorage.setItem('id',id);
	localStorage.setItem('state',state);

	props.setUser(id,state);
	if(props.uname === username && props.pwd === password) {

		props.history.push({
			pathname:'/layout'
		});
	
	
}
}
return (
	<div>
		<h1>Login</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
			<div className="userN">
			<label htmlFor="UN">UserName</label>
			<input type="text" id="UN" value={username} name="name" onChange={(e) => handleUsername(e)} autoComplete="off" required />	
			</div>
			<div className="UserP">
			<label htmlFor="pwd">Password</label>
			<input type="password" id="pwd" name="pword" value={password} onChange={(e) => handlePassword(e)} autoComplete="off" required/>	
			</div>
			<input type="submit" value="Login"/>
			</form>	
	</div>
)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
