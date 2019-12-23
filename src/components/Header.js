import React from 'react'
import { Row, Col } from 'reactstrap'

export default function Header(){
	let h1Style = { color: 'white' }

	return(
		<Row>
			<Col>
				<h1 style={ h1Style }>CSS ANIMATION TUTORIAL</h1>
			</Col>
		</Row>
	)
}