import React from 'react';
import BookList from '../Common/bookList.js';
import NavBar from '../Common/navbar';

export default class MemberContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <NavBar loginRes={JSON.parse(localStorage.getItem('login'))} />
                <BookList />
            </React.Fragment>
        );
    }
}