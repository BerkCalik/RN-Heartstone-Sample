import axios from 'axios'
import * as config from '../../Constants'
import * as actionTypes from '../ActionTypes'

export const getMechanics = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_CARDS,
			payload: axios({
				method: 'GET',
				url: config.API_BASE + config.API_GET_CARDS,
			}).then(result => result.data)
		})
	}
};
