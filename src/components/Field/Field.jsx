import { Component } from "react"
import { connect } from "react-redux"
import { PLAYER, PLAYER_SIGN } from "../../constants"
import { checkWin, checkEmptyCell } from "../../utils"
import { SET_FIELD, SET_WINNER, SET_STATUS, SET_PLAYER, RESET_GAME } from "../../actions"
import { Button } from "./components/Button"

export class FieldContainer extends Component {
  handleCLick(index) {
    let { player, status, field, dispatch } = this.props
    if (status === "WIN" || status === "DRAW" || field[index] !== PLAYER.NOBODY) {
      return
    }
    dispatch(SET_FIELD(index))
    dispatch(SET_PLAYER)

    const newField = [...field]
    newField[index] = player
    if (checkWin(newField, player)) {
      dispatch(SET_WINNER(player))
      dispatch(SET_STATUS("WIN"))
      return
    } else if (!checkEmptyCell(newField)) {
      dispatch(SET_STATUS("DRAW"))
    }
  }

  render() {
    let { field, dispatch } = this.props
    return (
      <div className="container mx-auto md p-10">
        <div className="grid grid-cols-3 gap-2 p-10 bg-slate-200 shadow-xl max-w-sm rounded-lg mx-auto">
          {field.map((cellPlayer, index) => (
            <button
              key={index}
              className="w-20 h-20 bg-slate-300 rounded-md hover:bg-slate-400 font-medium text-xl group relative overflow-hidden"
              onClick={() => {
                this.handleCLick(index)
              }}
            >
              {PLAYER_SIGN[cellPlayer]}
            </button>

            // <Button
            //   index={index}
            //   key={index}
            //   cellPlayer={cellPlayer}
            //   handleCLick={() => this.handleCLick(index)}
            // />
          ))}
          <div>
            <button
              className="bg-orange-300 rounded-md hover:bg-orange-400 p-4"
              onClick={() => dispatch(RESET_GAME)}
            >
              Reset game
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
