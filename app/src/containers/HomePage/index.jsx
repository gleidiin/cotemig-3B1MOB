import React from 'react';

import { getMe } from '../../services/login-service'; 
import { pegaTodosPost } from '../../services/post-service'; 

import PostContainer from '../../components/post-container';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { posts: [], usuario: {} };
    }

    componentDidMount() {
        pegaTodosPost().then(posts => {
            this.setState({...this.state, posts});
        });

        getMe().then(usuario => {
            this.setState({...this.state, usuario})
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post =>
                        (<PostContainer key={post.id} { ...post } />)
                    )
                }
            </div>
        )
    }
}

export default HomePage