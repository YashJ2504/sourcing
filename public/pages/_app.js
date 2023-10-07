import React from 'react';

import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/assets/css/fontawesome.css";
import "../public/assets/css/templatemo-digimedia-v1.css";
import "../public/assets/css/animated.css";
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import Script from 'next/script'


export default function App({ Component, pageProps }) {

	useEffect(() => {
		import('bootstrap/dist/js/bootstrap');
	}, []);
	return (
		<>
			<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
			
			
			

			
			<Component {...pageProps} />
			<ToastContainer
				position="top-right"
				autoClose={8000}
				hideProgressBar={false}
				newestOnTop={false}
				draggable={false}
				pauseOnVisibilityChange
				closeOnClick
				pauseOnHover
			/>
		</>

	);
}