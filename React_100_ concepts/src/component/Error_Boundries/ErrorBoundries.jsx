import React, { Component, Suspense } from 'react'
import Message from '../Pop_up_dailogBox/Message'
import Modal from '../Pop_up_dailogBox/Modal'

export default class ErrorBoundries extends Component {
  constructor(props){
    super(props)
    this.state = {hasError: false, hasErrorInfo: false}
  }

  // static getDerivedStateFromError(error){
  //   return {hasError: true}
  // }

  // render() {
  //   if(this.state.hasError){
  //     return <h1>An Error has been found.</h1>
  //   }
  //   else{
  //     return this.props.children
  //   }
  // }

  // **** There are two ways to made a errorBoundries
  
  componentDidCatch(error,errorinfo){
    this.setState({
      hasError: error,
      hasErrorInfo: errorinfo
    })
  }


  render() {
    if(this.state.hasError){
      return (
      <div style={{color: "red"}}>
        {this.props.fallback}
        <details>
          {this.state.error && this.state.error.toSting()}
          <br/>
          {this.state.hasErrorInfo.componentStack}
        </details>
        </div>
        )
    }
    else{
      return this.props.children
    }
  }
}
