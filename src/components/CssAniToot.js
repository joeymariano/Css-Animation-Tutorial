import React from 'react'
import './CssAniToot.css'

export default function CssAniToot(props) {

	// props.animate is either true or false determining animation boolean
	// turn animation on and off by adding css class 'off'

	let boxSwitch = () => {  	
		if (!props.hasOwnProperty('animate')) {
			return 'box'
		} else {
			return 'box off'
			}
	}

	return(
		<div className={ boxSwitch() }>
 		</div>
	)
}