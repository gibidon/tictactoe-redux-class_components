import { Component } from "react"
import { Cell } from "./components/Cell"
import { connect } from "react-redux"

export class FieldContainer extends Component {
	render() {
		return (
			<div className="container mx-auto md p-10">
				<div className="grid grid-cols-3 gap-2 p-10 bg-slate-50 shadow-lg max-w-sm rounded-lg mx-auto">
					{/* {this.field.map((cell, index) => ( */}
					{this.props.field.map((cell, index) => (
						<Cell
							content={cell}
							key={index}
							index={index}
							winner={this.props.winner}
							status={this.props.status}
							player={this.props.player}
						/>
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
})
export const Field = connect(mapStateToProps)(FieldContainer)
