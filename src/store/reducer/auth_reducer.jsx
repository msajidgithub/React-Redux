
const iState = {
   users:[],
    current_user: {},
    current_admin: {},
    add_hotal:{}

}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = iState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
              users: [...state.users, action.data]
            })
        case "SETUSER":
                return({
                    ...state,
                    current_user: action.payload
                })
         case "SETADMIN":
                return({
                    ...state,
                    current_admin: action.payload
                })
        case "SETHOTAL":
                return({
                    ...state,
                    add_hotal: action.payload
                })
        default:
            return state;
    }
}