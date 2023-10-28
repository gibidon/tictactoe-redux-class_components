import { Component } from "react"
import { connect } from "react-redux"
import { PLAYER_NAME } from "../../constants"

export class InformationContainer extends Component {
  // constructor(props) {
  //   console.log("constructor working..")
  //   super(props)
  //   this.name = props.name
  //   console.log("name in Information", props.name)
  // }

  render() {
    // console.log("props in render", this.props)
    return (
      <div className="text-center bg-slate-50 max-w-md mx-auto border-2 border-rose-600 rounded-lg">
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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  player: state.game.player,
  status: state.game.status,
  winner: state.game.winner,
})

export const Information = connect(mapStateToProps)(InformationContainer)
