import { Component } from "react"
import { connect } from "react-redux"
import { PLAYER_NAME } from "../../constants"

export class InformationContainer extends Component {
	render() {
		return (
			<>
				<div>
					Status: {this.props.status}
					{this.props.status !== "DRAW" && this.props.status !== "WIN" && (
						<p>Now making move: {PLAYER_NAME[this.props.player]}</p>
					)}
				</div>
				<div>
					{this.props.winner !== null && (
						<div>Winner: {PLAYER_NAME[this.props.winner]}</div>
					)}
				</div>
			</>
		)
	}
}

const mapStateToProps = (state) => ({
	player: state.game.player,
	status: state.game.status,
	winner: state.game.winner,
})

export const Information = connect(mapStateToProps)(InformationContainer)
