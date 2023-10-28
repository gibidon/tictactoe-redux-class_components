import { PLAYER } from "./constants"
import { createEmptyField } from "./utils"
import { changePlayer } from "./utils"

const initialState = {
  field: createEmptyField(),
  player: PLAYER.CROSS,
  winner: null,
  status: "ON",
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WINNER":
      return { ...state, winner: action.payload }
    case "RESET_GAME":
      return { ...state, ...initialState }
    case "SET_STATUS":
      return { ...state, status: action.payload }
    case "SET_PLAYER":
      return { ...state, player: changePlayer(state.player) }
    case "SET_FIELD":
      let newField = [...state.field]
      newField[action.payload] = state.player
      return { ...state, field: newField }
    default:
      return state
  }
}

const reducer = {
  game: gameReducer,
}
export { reducer }
