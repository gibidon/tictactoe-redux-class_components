import { PLAYER } from "../constants"

export const changePlayer = (player) => {
  return player === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS
}
