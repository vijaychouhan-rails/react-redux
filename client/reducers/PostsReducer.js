function postsReducer(state = [], action){  
  console.log("mystate is")
  console.log(state)
  console.log("End mystate is")
  switch(action.type){
    case 'getPost':
      return [...state, ...action.posts]
    case 'likes':
      return state.map((obj, index) => {
        if (obj.code === action.post.code) {
          return Object.assign({}, obj, {
            likes: (obj.likes + 1)
          })
        }
        return obj
      })
  }
  return state;
}

export default postsReducer;
