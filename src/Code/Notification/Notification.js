import { Component } from 'react'
import './Notification.css'

class Notification extends Component {
    render() {
        return (
            <div className='notification-page-background'>
                <header>
                    <img src={require('../../logo512.png')} className='applogo' alt='app logo' />
                </header>
                <text> This is from Main page</text>
                {
                    this.props.data.map((item, index) => {
                        return (

                            <div className='list'>
                                <h5>{index+1}</h5>
                                <h6>{item.tital}</h6>
                                <text>{item.message}</text>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Notification