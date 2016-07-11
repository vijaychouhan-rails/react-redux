import React from 'react';

const Post = React.createClass({
  render() {
    return (
      <div className="photo-grid col-md-6">
        <p>
          <b>{this.props.post.caption}</b>
        </p>
        <p>
          <span> {this.props.post.code} </span><br/>
          <span> Like: {this.props.post.likes} </span><br/>
          <span>===============================================</span><br/>
        </p>
      </div>
    )
  }

});

export default Post;