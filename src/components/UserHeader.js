import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../action'

class UserHeader extends Component{

    usersId = new Set();

    componentDidMount(){
        // if(this.props.user === null){
            this.props.fetchUser(this.props.userId)
            // this.usersId.add(this.props.userId);
        // }
    }

    render(){
        // console.log(this.props.users[this.props.userId])
        
        const { user } = this.props;
        console.log(user);

        if(!user){
            return <div></div>
        }
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {user: state.users.find(user => user.id === ownProps.userId)};
}

export default connect(mapStateToProps,{
    fetchUser
})(UserHeader);
