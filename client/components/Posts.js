import React from 'react';
import Post from './_Post';

const Posts = React.createClass({
  
  componentWillMount () {
    var _this = this;
    setTimeout(function(){ _this.props.fetchPost(); }, 100);
  },

  render() {
    console.log("render the value")
    console.log(typeof(this.props.storePost)==='undefined');
    console.log("END render the value")
    return (
      <div className="photo-grid col-md-12">
        { typeof(this.props.storePost)=='undefined' ? 'Loading' : (this.props.storePost.map((post, i) => <Post post={post} key={i} />) )}
      </div>
    )
  }

});

export default Posts;
