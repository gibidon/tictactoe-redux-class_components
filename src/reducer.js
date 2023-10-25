import { PLAYER } from "./constants"
import { createEmptyField } from "./utils"

const initialState = {
	field: createEmptyField(),
	player: PLAYER.CROSS,
	winner: null,
	status: "ON",
}
const getNewPlayer = (player) => {
	return player === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS
}

const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FILL_CELL":
			let newField = [...state.field]
			newField[action.payload] = state.player
			return { ...state, field: newField, player: getNewPlayer(state.player) }
		case "SET_WINNER":
			return { ...state, winner: action.payload }
		case "RESET":
			return { ...state, ...initialState }
		case "SET_STATUS":
			return { ...state, status: action.payload }
		default:
			return state
	}
}

const reducer = {
	game: gameReducer,
}
export { reducer }
