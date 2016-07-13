export function getPost(posts){
  return {
    type: 'getPost',
    posts
  }
};

export function likes(post){
  return{
    type: 'likes',
    post
  }
}

export function fetchPost(){
  return function(dispatch, getState){
    //var state = getState();
    var url = 'http://localhost:3000/mytestpost';
    fetch(url, {mode: 'cors'})
      .then(function(response){
        return(response.json());
      })
      .then(function(result){
        dispatch(getPost(result.post))
      })
      .catch(function(error){
        console.log("Opps...", "Could not fetch" + error);
      })
  }
}
