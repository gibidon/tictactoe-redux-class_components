export const ACTION_TYPE = {
  SET_STATUS: "SET_STATUS",
  SET_PLAYER: "SET_PLAYER",
  RESET_GAME: "RESET_GAME",
  SET_WINNER: "SET_WINNER",
  SET_FIELD: "SET_FIELD",
}

export const RESET_GAME = { type: ACTION_TYPE.RESET_GAME }
export const SET_FIELD = (index) => ({ type: ACTION_TYPE.SET_FIELD, payload: index })
export const SET_WINNER = (player) => ({ type: ACTION_TYPE.SET_WINNER, payload: player })
export const SET_STATUS = (status) => ({ type: ACTION_TYPE.SET_STATUS, payload: status })
export const SET_PLAYER = { type: ACTION_TYPE.SET_PLAYER }
