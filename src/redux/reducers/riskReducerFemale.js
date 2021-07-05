/* eslint-disable default-case */
const initailData = {
    risksInfo:[
        {age: '',
        weight: '',
        height: '',
        isSmoking: false,
        isDrinking: false,
        isVacineHepB: false,
        isExposure: false,
        isRenalFailure: false,
        isDM: false,
        isHT: false,
        isDLP: false,
        isHepatitis: false,
        isPancreaitis: false,
        isColitis: false,
        isOsteoporosis: false,
        isAsthma: false,
        isStone: false,
        isMI: false,
        isCAColon: false,
        isCABreast: false,
        isCAOvary: false,
        isCACervix: false,
        isCALiver: false,
        isCAPancreas: false,
        isCAOthers: false,
        bmi:'',}
    ]
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