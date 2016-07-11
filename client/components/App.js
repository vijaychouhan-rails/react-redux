import { bindActionCreators } from 'redux';
import React from 'react'
import { connect } from 'react-redux'
import * as postAction from '../actions/posts';
import Posts from './Posts'


function mapStateToProps(state){
  //console.log("State mapStateToProps")
  //console.log(state.myPostData)
  //console.log("ENndState mapStateToProps")
  return {
    mydata: 'This is test data',
    storePost: state.myPostData
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(postAction, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Posts)
