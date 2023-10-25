import { Component } from "react"
import { Cell } from "./components/Cell"
import { connect } from "react-redux"
import { PLAYER, PLAYER_SIGN } from "../../constants"
import { fillCell } from "../../actions/fillCell"
import { checkWin, checkEmptyCell } from "../../utils"

export class FieldContainer extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.handleClick = props.handleClick
	// 	this.winner = props.winner
	// 	this.player = props.player
	// 	this.status = props.status
	// 	console.log(this.status)

	// }
	// handleClick(index) {
	// 	if (
	// 		this.status === "WIN" ||
	// 		this.status === "DRAW" ||
	// 		this.content !== PLAYER.NOBODY
	// 	) {
	// 		return
	// 	}
	// 	dispatch(fillCell(index))
	// 	const newField = [...this.field]
	// 	newField[index] = this.player

	// 	if (checkWin(newField, this.player)) {
	// 		dispatch({ type: "SET_WINNER", payload: this.player })
	// 		dispatch({ type: "SET_STATUS", payload: "WIN" })
	// 		return
	// 	} else if (!checkEmptyCell(newField)) {
	// 		dispatch({ type: "SET_STATUS", payload: "DRAW" })
	// 	}
	// }
	render() {
		console.log("rendering field...")
		return (
			<div className="container mx-auto md p-10">
				<div className="grid grid-cols-3 gap-2 p-10 bg-slate-50 shadow-lg max-w-sm rounded-lg mx-auto">
					{this.props.field.map((cell, index) => (
						<button
							content={cell}
							index={index}
							key={index}
							className="w-20 h-20 bg-slate-200 rounded-md hover:bg-slate-400"
							onClick={() => {
								// console.log(this.player)
								// console.log(this.props.player)
								this.props.handleClick(index, this.props)
							}}
							// onClick={() => {

							// }
							// onClick={() => this.handleClick(index)}
						>
							{PLAYER_SIGN[cell]}
						</button>
					))}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	field: state.game.field,
	player: state.game.player,
	status: state.game.status,
	winner: state.game.winner,
	// {field,player,status,winner} = state.game
})
const mapDispatchToProps = (dispatch) => ({
	handleClick: (index, props) => {
		// console.log(this.props.player)
		console.log("handleClick mock..", index)
		console.log(props)
		// dispatch(fillCell(index))
		if (
			props.status === "WIN" ||
			props.status === "DRAW"
			// this.content !== PLAYER.NOBODY
		) {
			return
		}
		dispatch(fillCell(index))
		const newField = [...props.field]
		newField[index] = props.player

		if (checkWin(newField, props.player)) {
			dispatch({ type: "SET_WINNER", payload: props.player })
			dispatch({ type: "SET_STATUS", payload: "WIN" })
			return
		} else if (!checkEmptyCell(newField)) {
			dispatch({ type: "SET_STATUS", payload: "DRAW" })
		}
	},
})

export const Field = connect(
	mapStateToProps,
	mapDispatchToProps
)(FieldContainer)
