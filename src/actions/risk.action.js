import { RISKCHECKBOX_SUCCESS,RISKCHECKBOX_FETCHING,RISKCHECKBOX_FAILED} from "../Constants";


export const setStateToSuccess = (payload) => ({
    type: RISKCHECKBOX_SUCCESS,
    payload,
  });
  
  const setStateToFetching = () => ({
    type: RISKCHECKBOX_FETCHING,
  });
  
  const setStateToFailed = () => ({
    type: RISKCHECKBOX_FAILED,
  });
  
  export const getData = () => {
    return (dispatch) => {
      dispatch(setStateToFetching());
    };
  };
  
  export const addDataForm = (formData, history) => {
    return  (dispatch) => {
        try {
            dispatch(setStateToSuccess(formData))
            history.goBack();
        }catch(error){
            alert(JSON.stringify(error));
            dispatch(setStateToFailed());
        }
    };
  };
  
 