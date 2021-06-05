import React from 'react';
import axios from 'axios';
import Utilities from './utilities';

export default class GetAxios extends React.Component{
    static getAxios = () => {
        axios.interceptors.request.use = ((config)=>{
            config.headers['X-Requiest-Id'] = Utilities.uuidv4();
        });
        return axios;
    };
}