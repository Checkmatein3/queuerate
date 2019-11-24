import React from 'react';
import { login } from "../Utility/Firebase"
import { withRouter } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './Login.css';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		}
	}

	handleLogin = (event) => {
		const user_creds = this.state;
		login(user_creds);
		event.preventDefault();
	}

	changeHandler = event => {
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	}

	render() {
		return <Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className="paper">
				<Avatar className="avatar">
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
		  </Typography>
				<form className="form" noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						onChange={this.changeHandler}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={this.changeHandler}
					/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className="submit"
						onClick={this.handleLogin}
					>
						Sign In
			</Button>
					<Grid container>
						<Grid item xs>
				<Link href="/forgotpassword" variant="body2">
				  Forgot your password?
				</Link>
			  </Grid>
						<Grid item>
							<Link href="/signup" variant="body2">
								Don't have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	}
}

export default withRouter(Login);
