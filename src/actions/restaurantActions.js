import axios from 'axios'
import {RESTAUTANTS_LIST_REQUEST,
    RESTAUTANTS_LIST_SUCCESS,
    RESTAUTANTS_LIST_FAIL} from '../constants/restaurantsConstants'
    impor



    export const listRestaurants = () =>async (dispatch)=>{

        try {
            dispatch({type:RESTAUTANTS_LIST_REQUEST})
            const{data} =await axios.get('./restaurants.json')
            dispatch({
                type:RESTAUTANTS_LIST_SUCCESS
            })
            
        } catch (error) {
        dispatch({
            typeRESTAUTANTS_LIST_FAIL,payload:error
        })
        }



    }