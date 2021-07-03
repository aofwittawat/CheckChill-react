/* eslint-disable default-case */
const initailData = {
    risksInfo:[]
}


const riskReducer = (state=initailData, action) => {
   switch(action.type){
        case 'ADD_RISK_PERSON':
           return {
               ...state,
               risksInfo: [...state.risksInfo, action.payload]
           }
        default: return state
   }
}

export default riskReducer