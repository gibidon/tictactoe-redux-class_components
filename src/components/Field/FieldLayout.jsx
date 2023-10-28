import { Component } from "react"
import { PLAYER_SIGN } from "../../constants"

export class FieldLayout extends Component {
  render() {
    console.log("props in FeielLayout", this.props)
    const { field, handleCLick } = this.props
    return (
      <div className="container mx-auto md p-10">
        <div className="grid grid-cols-3 gap-2 p-10 bg-slate-200 shadow-xl max-w-sm rounded-lg mx-auto">
          {field.map((cellPlayer, index) => (
            <button
              // cellPlayer={cellPlayer}
              index={index}
              key={index}
              className="w-20 h-20 bg-slate-300 rounded-md hover:bg-slate-400 font-medium text-xl group relative overflow-hidden"
              onClick={() => {
                handleCLick(index, cellPlayer)
                // if (status === "WIN" || status === "DRAW" || cell !== PLAYER.NOBODY) {
                //   return
                // }
                // dispatch({ type: "FILL_CELL", payload: index })
                // const newField = [...field]
                // newField[index] = player

                // if (checkWin(newField, player)) {
                //   dispatch({ type: "SET_WINNER", payload: player })
                //   dispatch({ type: "SET_STATUS", payload: "WIN" })
                //   return
                // } else if (!checkEmptyCell(newField)) {
                //   dispatch({ type: "SET_STATUS", payload: "DRAW" })
                // }
              }}
            >
              {PLAYER_SIGN[cellPlayer]}
            </button>
          ))}
          {/* <div>
        <button
          className="bg-orange-300 rounded-md hover:bg-orange-400 p-4"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Restart game
        </button>
      </div> */}
        </div>
      </div>
    )
  }
}
