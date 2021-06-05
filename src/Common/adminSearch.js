import React from 'react';
import BookList from '../Common/bookList.js';
import axios from 'axios';
import NavBar from '../Common/navbar';

export default class AdminSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bookDetails: [],
            searchText: '',
            searchType: 'MemberIdSearch',
        };
    }

    componentDidMount = () => {
        
    }

    handleText = (e) => {
        let updatedState = {...this.state};
        updatedState[e.target.name] = e.target.value;
        this.setState(updatedState);
    }

    render(){
        return(
            <React.Fragment>
                <form>
                    <div className={'form-group form-inline'}>
                        <span>Search Type :</span>&nbsp;&nbsp;
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="searchType" id="MemberIdSearch" checked={this.state.searchType==='MemberIdSearch'} onChange={this.handleText} value={'MemberIdSearch'} />
                            &nbsp;&nbsp;
                            <label className="form-check-label" htmlFor="MemberIdSearch">
                                Member Id
                            </label>
                            &nbsp;&nbsp;
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="searchType" id="BookSearch" checked={this.state.searchType==='BookSearch'} onChange={this.handleText} value={'BookSearch'} />
                            &nbsp;&nbsp;
                            <label className="form-check-label" htmlFor="AdminSearch">
                                Book Title
                            </label>
                            &nbsp;&nbsp;
                        </div>
                        <div className={'form-group'}>
                            <input className={'form-control'} placeholder={'Search Text'} type={'text'} name={'searchText'} id={'searchText'} onChange={this.handleText} value={this.state.searchText} />
                            &nbsp;&nbsp;
                        </div>
                        <div className={'form-group'}>
                            <button className={'btn btn-primary'} name={'searchButton'} id={'searchButton'} onClick={(e)=>{this.props.search(e,this.state.searchType, this.state.searchText)}} >Search</button>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}