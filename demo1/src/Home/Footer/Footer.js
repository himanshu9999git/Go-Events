import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='main-footer' id ="footer">

        <div className='footer-left'>
            <div className='footer-details'>
                <div className='f-heading'>Contact Us</div>
                <div className='phone'>Phone No.: 9876543210</div>
                <div className='address'>Mailing Address: SCO 35, 121003</div>
                <div className='address'>Gmail: demo@gmail.com</div>
            </div>
        </div>
        <div className='footer-left'>
        <div className='footer-login'>
                <div className='f-heading'>Login</div>
            <div className='user-login'>User Login</div>
            <div className='organisation-login'>Organisation Login</div>
        </div>
        </div>
    </div>
  )
}

export default Footer