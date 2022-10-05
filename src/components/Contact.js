import React from 'react'
import '../css/Contact.css';
export default function Contact() {
    return (
        <div className='contact'>
            <div className='content-left'>
                <div className='address'>
                    <i class="fa-solid fa-location-dot"></i>
                    <span> Address </span>
                    <p>Vinhomes Grand Park, Nguyen Xien Street, District 9, Ho Chi Minh City</p>
                </div>
                <div className='phone'>
                    <i class="fa-solid fa-phone"></i>
                    <span>  Phone </span>
                    <p>+84 359404798</p>
                </div>
                <div className='email'>
                    <i class="fa-solid fa-envelope"></i>
                    <span> Email </span>
                    <p>vinhnqse150131@fpt.edu.vn</p>
                </div>
            </div>
            <div>
                <form className='form'>
                    <h2 className='form-heading'>Send us the message</h2>
                    <div className='form-group'>
                        <input type='text' className='form-input' placeholder='Tell us your name'></input>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-input' placeholder='First Name'></input>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-input' placeholder='Last Name'></input>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-input' placeholder='Your Email'></input>
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-input' placeholder='Your Phone'></input>
                    </div>
                    <div className='form-group'>
                        <textarea
                            rows='5' cols='10'
                            className='form-input'
                            placeholder='Give us your message'
                            textarea=''>
                        </textarea>
                    </div>
                    <input type='submit' className='form-submit' value='Send message'></input>
                </form>
            </div>
        </div>
    )
}
