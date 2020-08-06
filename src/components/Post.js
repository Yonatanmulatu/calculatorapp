import React from 'react';

class Post extends React.Component {
    render() {
        return(
            <p>{this.props.post.text} by {this.props.post.author}</p>
        );
    }
}

export default Post;