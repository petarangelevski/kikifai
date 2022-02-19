export const initialState = {
    user:null,
    playlist: [],
    playing: false,
    item:null,
    // token: "BQB81eTFG8weXd9MpvfE-g1bJvimfKKJu8HCeWtojBx9n4uJDBr29Vhn7BjSCewWrlAgygalNT-BkA2yDPeLxC1qDiTizLx61DjLIQuuhjdEW2JPDBfo8bgWVkMW_oICUrdmXCXLCIOcCNnnCYHpoF4L9slhxxd6srOIh53Fk7oc0DUZidAb"
};

const reducer = (state,action) => {
console.log(action);

switch (action.type) {

    case 'SET_USER':
        return {
            ...state,
            user: action.user
        };
        case "SET_TOKEN":
        return{
            ...state,
            token: action.token
        };
        case "SET_USER":
            return{
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
}
}
export default reducer;