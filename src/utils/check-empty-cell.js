import { PLAYER } from "../constants/player"

export const checkEmptyCell = (field) => {
	return field.some((cellContent) => cellContent === PLAYER.NOBODY)
}
