import React from 'react';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';
import TheContent from './TheContent';



export default function TheLayout () {
	return (
		<>
			<TheHeader />
			<TheContent />
			<TheFooter />
		</>
	);
};