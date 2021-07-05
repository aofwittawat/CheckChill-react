/* eslint-disable default-case */
const initailData = {
    risksInfo:[]
}


const riskReducerFemale = (state=initailData, action) => {
   switch(action.type){
        case 'ADD_RISK_PERSON_FEMALE':
           return {
               ...state,
               risksInfo: [...state.risksInfo, action.payload]
           }
        default: return state
   }
}

export default riskReducerFemale