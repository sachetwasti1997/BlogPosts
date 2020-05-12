import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../action';
import UserHeader from './UserHeader';
// import {map} from './App';

class PostList extends Component{

    componentDidMount(){
        this.props.fetchingPosts();
    }

    // makeChoice = (post) => {
    //     if(map.has(post.userId)){
    //         return <UserHeader user = {map.get(post.userId)} userId={post.userId}/>
    //     }else{
    //         return <UserHeader user = {null} userId = {post.userId}/>
    //     }
    // }

    renderList = () => {
        return this.props.posts.map(post => {
            return <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    {/* {this.makeChoice(post)}     */}
                    <UserHeader userId={post.userId}/>
                </div>
            </div>
        });
    }

    render(){
        console.log(this.props.posts);
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps,{
    fetchingPosts: fetchPosts
}
)(PostList);