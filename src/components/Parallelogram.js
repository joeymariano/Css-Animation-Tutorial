import React from 'react'
import './Parallelogram.css'
import { Button } from 'reactstrap'



export default function Parallelogram(props){
	let parallelogramColor = (colr) => {
	  return { backgroundColor: colr }
	};

	return(
				<Button className="parallelogram" style={ parallelogramColor(props.color) }>
					<div className="parallelogram-text">{ props.text }</div>
		 		</Button>
	)
}

