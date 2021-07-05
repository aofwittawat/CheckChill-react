/* eslint-disable default-case */
const initailData = {
    risksInfo:[]
}


const riskReducerMale = (state=initailData, action) => {
   switch(action.type){
        case 'ADD_RISK_PERSON_MALE':
           return {
               ...state,
               risksInfo: [...state.risksInfo, action.payload]
           }
        default: return state
   }
}

export default riskReducerMale