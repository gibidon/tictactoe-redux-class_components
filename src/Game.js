import { Component } from "react"
import { Field } from "./components/Field/Field"

export class Game extends Component {
	render() {
		return (
			<div className="container sm mx-auto px-4">
				<Field />
			</div>
		)
	}
}

export default Game
