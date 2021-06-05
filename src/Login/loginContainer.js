import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = () => {
        // const loginRes = localStorage.getItem('login');
        const loginRes = {
            "id": "1",
            "memberId": "abc@gmail.com",
            "password": "abc",
            "userType": "admin"
        };
        if(loginRes){
            this.props.history.push(loginRes.userType === 'member' ? '/member' : 'admin'); 
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>Login</h1>
            </React.Fragment>
        );
    }
}