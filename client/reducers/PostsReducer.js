function postsReducer(state = [], action){
  console.log("reducre............")
  console.log(state);
  console.log( action );
  console.log("post reducers")
  switch(action.type){
    case 'getPost':
      return Object.assign({}, state, {
        myPostData: action.post
      })
  }
  return state;
}

export default postsReducer;
