export default function (state, action) {
  switch (action.type) {
    case 'SET_REQUEST_TRIAL':
      return action.data
    default:
      return state;
  }
}