import React from 'react';
import Post from './_Post';

const Posts = React.createClass({
  componentWillMount() {
    if(this.props.posts.length==0){
      var _this = this;
      this.props.fetchPost();
    }
  },

  render() {
    return (
      <div className="photo-grid col-md-12">
        { this.props.posts.map((post, i) => <Post post={post} key={i} />) }
      </div>
    )
  }

});

export default Posts;
