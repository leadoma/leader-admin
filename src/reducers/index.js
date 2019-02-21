import { PROFILE_DATA } from '../actions';

let profileState = {
    name: "نام شما",
    image_indicator:"",
}

const mainReducer=(state=profileState, action) => {
    switch(action.type){
        case (PROFILE_DATA):
            return action.payload;
            
        default:
            return state;
    }
}

export default mainReducer;