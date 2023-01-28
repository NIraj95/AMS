import React from 'react';
import LoginForm from '../components/loginForm/LoginForm';
import BrandLogo from '../assets/images/brand-logo.svg';

const Login = () => {
	return (
		<>
			<div className='login__page '>
				<div className='login__left'>
					<img
						src={BrandLogo}
						alt=''
					/>
				</div>
				<div className='login__right'>
					<h1 className='color-primary--base'>Login</h1>
					<p className='color-grey--80'>Please enter your details </p>
					<LoginForm />
				</div>
			</div>
		</>
	);
};

export default Login;
