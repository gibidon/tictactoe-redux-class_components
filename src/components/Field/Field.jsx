import { Component } from "react"
import { connect } from "react-redux"
import { PLAYER, PLAYER_SIGN } from "../../constants"
import { checkWin, checkEmptyCell } from "../../utils"
// import { FieldLayout } from "./FieldLayout"

export class FieldContainer extends Component {
  handleCLick(index, content) {
    let { player, status, field, dispatch } = this.props
    // console.log("handleClick", player, status, field, dispatch)
    if (status === "WIN" || status === "DRAW" || content !== PLAYER.NOBODY) {
      return
    }
    dispatch({ type: "FILL_CELL", payload: index })

    const newField = [...field]
    newField[index] = player
    if (checkWin(newField, player)) {
      dispatch({ type: "SET_WINNER", payload: player })
      dispatch({ type: "SET_STATUS", payload: "WIN" })
      return
    } else if (!checkEmptyCell(newField)) {
      dispatch({ type: "SET_STATUS", payload: "DRAW" })
    }
  }
  render() {
    let { player, status, field, dispatch } = this.props
    // console.log(this.handleCLick)
    return (
      // console.log(this.handleCLick)
      // <FieldLayout field={field} handleClick={this.handleClick} />
      <div className="container mx-auto md p-10">
        <div className="grid grid-cols-3 gap-2 p-10 bg-slate-200 shadow-xl max-w-sm rounded-lg mx-auto">
          {field.map((cellPlayer, index) => (
            <button
              index={index}
              key={index}
              className="w-20 h-20 bg-slate-300 rounded-md hover:bg-slate-400 font-medium text-xl group relative overflow-hidden"
              onClick={() => {
                this.handleCLick(index, cellPlayer)
              }}
            >
              {PLAYER_SIGN[cellPlayer]}
            </button>
          ))}
          <div>
            <button
              className="bg-orange-300 rounded-md hover:bg-orange-400 p-4"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Restart game
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  field: state.game.field,
  player: state.game.player,
  status: state.game.status,
})

export const Field = connect(mapStateToProps)(FieldContainer)
