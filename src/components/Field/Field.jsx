import { Component } from "react"
import { connect } from "react-redux"
import { PLAYER_SIGN } from "../../constants"
import { fillCell } from "../../actions/fillCell"
import { checkWin, checkEmptyCell } from "../../utils"

export class FieldContainer extends Component {
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
              className="w-20 h-20 bg-slate-200 rounded-md hover:bg-slate-400 font-medium text-xl"
              onClick={() => {
                this.props.handleClick(index, this.props)
              }}
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
    console.log("handleClick mock..", index)
    console.log(props)
    if (props.status === "WIN" || props.status === "DRAW") {
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

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer)
