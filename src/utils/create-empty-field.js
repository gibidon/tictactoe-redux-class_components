import { PLAYER } from "../constants/player"

export const createEmptyField = () => {
	return Array(9).fill(PLAYER.NOBODY)
}
