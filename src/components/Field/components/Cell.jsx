import { PLAYER, PLAYER_SIGN } from "../../../constants/"
import { Component } from "react"
import { fillCell } from "../../../actions/fillCell"
import { connect } from "react-redux"
import { checkWin, checkEmptyCell } from "../../../utils"

export class CellContainer extends Component {
	constructor({ index, player, winner, status }) {
		super()
		// this.content = content
		this.index = index
	}

	render() {
		console.log(this.props)
		return (
			<button
				className="h-20 w-20 bg-slate-200 rounded-md hover:bg-slate-300"
				onClick={() => this.props.handleClick(this.index)}
				// onClick={() => this.props.handleClick2(this.index)}
			>
				<span className="font-medium text-2xl">
					{PLAYER_SIGN[this.props.content]}
				</span>
			</button>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleClick: (index) => {
		dispatch(fillCell(index))
	},
	// handleClick2: (index) => {
	// 	if (
	// 		this.props.status === "WIN" ||
	// 		this.props.status === "DRAW" ||
	// 		this.content !== PLAYER.NOBODY
	// 	) {
	// 		return
	// 	}
	// 	dispatch(fillCell(index))
	// 	const newField = [...this.props.field]
	// 	newField[index] = this.props.player

	// 	if (checkWin(newField, this.props.player)) {
	// 		dispatch({ type: "SET_WINNER", payload: this.props.player })
	// 		dispatch({ type: "SET_STATUS", payload: "WIN" })
	// 		return
	// 	} else if (!checkEmptyCell(newField)) {
	// 		dispatch({ type: "SET_STATUS", payload: "DRAW" })
	// 	}
	// },
})
export const Cell = connect(null, mapDispatchToProps)(CellContainer)
