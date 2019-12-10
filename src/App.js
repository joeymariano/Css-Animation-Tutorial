import React from 'react'
import CssAniToot from './components/CssAniToot'
import Parallelogram from './components/Parallelogram'
import { Container, Row, Col } from 'reactstrap'
import Header from './components/Header'

function App() {
  return (
    <Container className="app">
			<Header />
			<Row>
				<Col>
					<CssAniToot />
				</Col>
				<Col>
					<Parallelogram color="green" text="START"/>
					<Parallelogram color="red" text="STOP"/>
				</Col>
			</Row>
    </Container>
  );
}

export default App;
