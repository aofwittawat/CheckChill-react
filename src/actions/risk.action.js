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
    return async (dispatch) => {
      await httpClient.post(server.PRODUCT_URL, formData);
      history.goBack();
    };
  };
  
  export const getProductById = (id) => {
    return async (dispatch) => {
      try {
        dispatch(setStateToFetching());
        let result = await httpClient.get(`${server.PRODUCT_URL}/${id}`);
        dispatch(setStateToSuccess(result.data));
      } catch (error) {
        alert(JSON.stringify(error));
        dispatch(setStateToFailed());
      }
    };
  };
  