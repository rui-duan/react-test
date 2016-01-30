export default function more(state = 3, action) {
  switch (action.type) {
    case 'MORE':
      return state + 3
    case 'LESS':
      return state - 3
    default:
      return state
  }
}
