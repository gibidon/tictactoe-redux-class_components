import { Component } from "react"
import { PLAYER_SIGN } from "../../../constants"

export class Button extends Component {
  render() {
    const { cellPlayer, handleClick } = this.props
    console.log(this.props.handleClick) // handleClick -undefined ??? WTF ??
    return (
      <button
        onClick={handleClick}
        // onClick={() => handleClick()}
        className="w-20 h-20 bg-slate-300 rounded-md hover:bg-slate-400 font-medium text-xl group relative overflow-hidden"
      >
        {PLAYER_SIGN[cellPlayer]}
      </button>
    )
  }
}
