export const PLAYLIST_INITIAL_STATE = {
  search: null,
  dataSearch: null,
  likeTracks: {},
  tracksPlaylist: [],
  isLoading: true
}

export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "GET_SEARCH": 
      return {...state, search: { ...action.payload }}
      case "GET_DATA": 
      return {...state, dataSearch: { ...action.payload }}
      case "ADD_LIKE_TRACKS": 
      return {...state, likeTracks: { ...action.payload }}
      case "CONTROL_TRACKS": 
      return {...state, tracksPlaylist: [ ...action.payload ]}
      case "SET_LOADING":
        return {...state, isLoading: false}
      default:
        return state
  }
}