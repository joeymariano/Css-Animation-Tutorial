import React, { Component} from 'react';
import CssAniToot from './components/CssAniToot'
import Parallelogram from './components/Parallelogram'
import { Container, Row, Col } from 'reactstrap'
import Header from './components/Header'

class App extends Component {
	constructor(props) {
	  super(props)
	  this.state = { animate: false }
	}

	aniSwitch = () => {
		if (this.state.animate === false){
			this.setState({animate: true})
		} else {
			this.setState({animate: false})
		}
	}

	render(){
	  return (
	    <Container className="app">
				<Header />
				<Row>
					<Col>
						<CssAniToot animate={ this.state.animate }/>
					</Col>
					<Col>
						<Parallelogram aniSwitch={ this.aniSwitch } color="green" text="START"/>
						<Parallelogram aniSwitch={ this.aniSwitch } color="red" text="STOP"/>
					</Col>
				</Row>
	    </Container>
	  )
	}
}

export default App;
