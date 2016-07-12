export function getPost(post){
  return {
    type: 'getPost',
    post
  }
};

export function fetchPost(){
  return function(dispatch, getState){
    //console.log("calling to fetchPost")
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
