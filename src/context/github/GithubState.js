import React, { useReducer } from 'react';
import axios from 'axios'
import GithubContext from './githubContext';
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_ALERT,
    REMOVE_ALERT,
} from '../Types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    
    // Search user

    // Get user

    //Clear Users

    // Set loading

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState
