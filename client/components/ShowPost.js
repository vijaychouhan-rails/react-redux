import React from 'react';
import { Link } from 'react-router';

const ShowPost = React.createClass({

  testClickFunction(post){
    console.log("this.this.props")
    console.log(this.props);
    console.log("End this.this.props")
    this.props.likes(post)
  },

  render() {
    var post = SearchTag(this.props.posts, this.props.params.id)
    return (
      <div>
        <h1>
          {post.caption}
        </h1>
        <span onClick={this.props.likes.bind(null, post)}>Like: {post.likes}</span><br/>
        <img src={post.display_src} height='400px;'></img>
        <span onClick={() => this.testClickFunction(post)}>Increate Like count</span>
      </div>
    )
  },
  
  // handleClick (e) {
  //   console.log(e)
  //   console.log(this.props.likes(e))
  // }
})



var SearchTag = function (json_obj, searchElement) {
  var i = null;
  for (i = 0; json_obj.length > i; i += 1) {
    if (json_obj[i].code === searchElement) {
      console.log("found record")
      return json_obj[i];
    }
  }
  console.log("not found record")
  return null;
};


//export default connect()(ShowPost)
export default ShowPost;
