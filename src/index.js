import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './Login/loginContainer';
import MemberContainer from './Member/memberContainer';
const AdminContainer = React.lazy(()=> import('./Admin/adminContainer'));
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class LMS extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <React.Suspense fallback={<div>...Loading</div>}>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={()=><Redirect to='/login' />} />
                            <Route path='/login' component={LoginContainer} />
                            <Route path='/member' component={MemberContainer} />
                            <Route path='/admin' component={AdminContainer} />
                            <Route path='*' component={()=><Redirect to='/login' />} />
                        </Switch>
                    </Router>
                </React.Suspense>
        );    
    }
}

ReactDOM.render(
    <LMS />,document.getElementById('root')
);
