import React from 'react';
import ReactPaginate from 'react-paginate';
import classes from './bookList.scss';

const BookList = props => {
    const list = props.bookDetails.sort((a,b)=>{
        return b.title - a.title;
    }).slice(5*(props.currentPage-1), 5*(props.currentPage-1) + 5);
    return(
        <React.Fragment>
            {list.length>0 ? <React.Fragment><table className={"table table-responsive"}>
                <thead>
                    <tr>
                        <td>Book Title</td>
                        <td>Author</td>
                        <td>Category</td>
                        <td>Total Copies</td>
                        <td>Copies Available</td>
                        <td>Rack No</td>
                        {list[0].memberId ? <td>Member Id</td>: null}
                        {list[0].status ? <td>Status</td> : null}
                        {list[0].borrowedDate ? <td>Borrowed Date</td> : null}
                        {list[0].returnDate ? <td>Return Date</td> : null}
                    </tr>
                </thead>
                <tbody>
                    {list.map(b=>{
                        return(
                            <tr key={b.UUID}>
                                <td>{b.title}</td>
                                <td>{b.author}</td>
                                <td>{b.category}</td>
                                <td>{b.totalCopies}</td>
                                <td>{b.availCopies}</td>
                                <td>{b.rackNo}</td>
                                {list[0].memberId ? <td>{b.memberId}</td>: null}
                                {list[0].status ? <td>{b.status}</td> : null}
                                {list[0].borrowedDate ? <td>{b.borrowedDate}</td> : null}
                                {list[0].returnDate ? <td>{b.returnDate}</td> : null}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className={classes.paginationClass}>
                <ReactPaginate 
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(props.bookDetails.length/5)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={props.onPageChange}
                    containerClassName={'pagination'}
                    activeClassName={'active'} 
            />
            </div>
            </React.Fragment> : <h1>"No books are available currently in the library"</h1> }
        </React.Fragment>
    );
};

export default BookList;