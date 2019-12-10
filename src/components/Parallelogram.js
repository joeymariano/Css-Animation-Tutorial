import React from 'react'
import './Parallelogram.css'
import { Col, Button } from 'reactstrap'



export default function Parallelogram(props){
	let parallelogramColor = (colr) => {
	  return { backgroundColor: colr }
	};

	return(
				<div class="parallelogram" style={ parallelogramColor(props.color) }>
					<div class="parallelogram-text">{ props.text }</div>
		 		</div>
	)
}

