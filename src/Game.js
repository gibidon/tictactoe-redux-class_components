import { Component } from "react"
import { Field, Information } from "./components"

export class Game extends Component {
  render() {
    return (
      <div className="container sm mx-auto px-4 ">
        <Field />
        <Information name={"Igor"} />
      </div>
    )
  }
}

export default Game
