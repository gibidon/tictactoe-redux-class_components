import { Component } from "react"
import { Field } from "./components/Field/Field"
import { Information } from "./components/Information/Information"

export class Game extends Component {
	render() {
		return (
			<div className="container sm mx-auto px-4">
				<Field />
				<Information />
			</div>
		)
	}
}

export default Game
