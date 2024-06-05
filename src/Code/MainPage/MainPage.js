import { Component } from 'react'
import './MainPage.css'

class MainPage extends Component {
render(){
  return (
    <div className='main-page-background'>
      <header>
        <img src={require('../../logo512.png')} className='applogo' alt='app logo'/>
      </header>
      <text> This is from Main page</text>
    </div>
  )
}
}
export default MainPage