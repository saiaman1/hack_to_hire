import React from 'react';

export default class AddBook extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            category: '',
            rackNo: '',
            totalCopies: '',
            availCopies: '',
        };
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
                    <strong>Add a Book to the LMS :</strong><br/>
                    <div className={'form-group'}>
                        <label htmlFor={'title'}>Title</label>
                        <input className={'form-control'} placeholder={'Title'} type={'text'} name={'title'} id={'title'} onChange={this.handleText} value={this.state.title} />
                    </div><div className={'form-group'}>
                        <label htmlFor={'author'}>Author</label>
                        <input className={'form-control'} placeholder={'Author'} type={'text'} name={'author'} id={'author'} onChange={this.handleText} value={this.state.author} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'category'}>Category</label>
                        <input className={'form-control'} placeholder={'Category'} type={'text'} name={'category'} id={'category'} onChange={this.handleText} value={this.state.category} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'rackNo'}>Rack No</label>
                        <input className={'form-control'} min={1} placeholder={'Rack No'} type={'number'} name={'rackNo'} id={'rackNo'} onChange={this.handleText} value={this.state.rackNo} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'totalCopies'}>Total copies</label>
                        <input className={'form-control'} min={1} placeholder={'Total copies'} type={'number'} name={'totalCopies'} id={'totalCopies'} onChange={this.handleText} value={this.state.totalCopies} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor={'availCopies'}>Available copies</label>
                        <input className={'form-control'} min={1} placeholder={'Available copies'} type={'number'} name={'availCopies'} id={'availCopies'} onChange={this.handleText} value={this.state.availCopies} />
                    </div>
                    <div className={'form-group'}>
                        <button className={'btn btn-primary'} name={'addButton'} id={'addButton'} onClick={(e)=>{this.props.addBook(e,{...this.state})}} >Add a book</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}