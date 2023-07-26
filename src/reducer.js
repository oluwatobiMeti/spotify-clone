export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null
}

export const reducer = (state, action) => {
   console.log(action);
    switch (action.type) {
        case "SET_USER":
        return (
            {
            ...state,
            user: action.user
         }
        )
    }
}