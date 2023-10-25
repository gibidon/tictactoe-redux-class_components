import { WIN_PATTERNS } from "../constants/win-patterns"

export const checkWin = (field, player) => {
	return WIN_PATTERNS.some((winPattern) =>
		winPattern.every((cellIndex) => field[cellIndex] === player)
	)
}
