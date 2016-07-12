function postsReducer(state = [], action){
  switch(action.type){
    case 'getPost':
      return [...state, ...action.post]
  }
  return state;
}

export default postsReducer;
