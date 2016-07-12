import React from 'react';
import { Link } from 'react-router';

const Post = React.createClass({
  render() {
    return (
      <div className="photo-grid col-md-6">
        <p>
          <b><Link to={`/post/${this.props.post.code}`}>{this.props.post.caption}</Link></b>
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