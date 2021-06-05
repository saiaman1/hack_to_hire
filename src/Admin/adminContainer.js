import React from 'react';
import BookList from '../Common/bookList.js';
import axios from 'axios';
import NavBar from '../Common/navbar';
import AdminSearch from '../Common/adminSearch';
import AddBook from '../Common/addBook';
import Utilities from '../Utilities/utilities';
import GetAxios from '../Utilities/axios';

export default class AdminContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookDetails: [],
            currentPage: 1,
        };
    }

    componentDidMount = () => {
        this.getBooks();
    }

    getBooks = () => {
        GetAxios.getAxios().get('http://localhost:7000/books').then(res=>{
            this.setState({bookDetails: res.data});
        }).catch(error=>{
            console.log(error);
        });
    }

    getBooksBasedOnMemberId = (memberId) => {
        if(memberId === '') return this.getBooks();
        axios.get('http://localhost:7000/borrowedBooks').then(res=>{
            this.setState({bookDetails: res.data[memberId]});
        }).catch(error=>{
            console.log(error);
        });
    }

    getBooksByTitle = (title) => {
        if(title === '') return this.getBooks();
        axios.get('http://localhost:7000/borrowedBooks').then(res=>{
            this.setState({bookDetails: Utilities.getBooksByTitle(res.data, title)});
        }).catch(error=>{
            console.log(error);
        });
    }

    search = (e, searchType, value) => {
        e.preventDefault();
        searchType === 'BookSearch' ? this.getBooksByTitle(value) : this.getBooksBasedOnMemberId(value);
    }

    onPageChange = (data) => {
        this.setState({currentPage: (data.selected+1)});
    }

    addBook = (e,data) => {
        e.preventDefault();
        GetAxios.getAxios().post('http://localhost:7000/books', {...data}).then(res=>{
            this.getBooks();
        }).catch(error=>{
            console.log(error);
        });
    }

    render(){
        return(
            <React.Fragment>
                <NavBar loginRes={JSON.parse(localStorage.getItem('login'))} />
                <div className={'row'}>
                    <div className={'offset-sm-1 col-sm-5'}>
                        <AdminSearch search={this.search}/>
                        <BookList bookDetails={this.state.bookDetails} onPageChange={this.onPageChange} currentPage={this.state.currentPage}/>
                    </div>
                    <div className={'offset-sm-1 col-sm-4'}>
                        <AddBook addBook={this.addBook}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}