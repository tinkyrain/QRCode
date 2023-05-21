import { qrStateInterface, qrActionInterface } from "../../types/type";
import { GENERATE_QR } from "../actions/actions";

const defaulState:qrStateInterface = {
    text:'https://github.com/tinkyrain',
}

export const qrReducer = (state = defaulState, action:qrActionInterface):qrStateInterface => {
    switch(action.type){
        case GENERATE_QR:
            return {...state, text: state.text = action.qrChange}
        default:
            return state;
    }
} 