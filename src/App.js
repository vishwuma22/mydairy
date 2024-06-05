import { Component } from 'react'
import './App.css'
import MainPage from './Code/MainPage/MainPage'
import Notification from './Code/Notification/Notification'

class App extends Component {
   notificationList=[
    {
      id:1,
      tital:"Hello good morning",
      message:'jhbknsmcdh dnc mdbcdcmnd j dcd cac cm kj n j'
    },
    {
      id:2,
      tital:"Hello good morning",
      message:'jhbknsmcdh dnc mdbcdcmnd j dcd cac cm kj n j'
    },
    {
      id:3,
      tital:"Hello good morning",
      message:'jhbknsmcdh dnc mdbcdcmnd j dcd cac cm kj n j'
    },
    {
      id:4,
      tital:"Hello good morning",
      message:'jhbknsmcdh dnc mdbcdcmnd j dcd cac cm kj n j'
    }
   ]
render(){
  return (
    <div>
      <header>
        <img src={require('./logo512.png')} className='applogo' alt='app logo'/>
      </header>
      <text>hii</text>
      <MainPage />
      <Notification data={this.notificationList}/>
    </div>
  )
}
}
export default App