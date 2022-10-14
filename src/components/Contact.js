import React from 'react'
import '../css/Contact.css';
export default function Contact() {
    return (
        <div className='contact'>
            
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="images/office.jpg"></img>
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Nguyễn Quốc Vinh<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">Facebook</a></p>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Nguyễn Quốc Vinh<i class="material-icons right">close</i></span>
                    <p>
                        một con người yêu tự do và những điều thù vị xung quanh. luôn tìm kiếm những điều bản thân cảm thấy thích thú.
                    </p>
                </div>
            </div>
            <div className='card'>
                <div class="col l4 offset-l2 s12">
                    <h5 class="black-text">Links</h5>
                    <ul>
                        <li><a class="black-text text-lighten-3" href="https://github.com/VinhUser">Github: Vinhuser</a></li>
                        <li><a class="black-text text-lighten-3" href="https://www.facebook.com/kosakiyuuki/">Facebook: Vinh Nguyễn</a></li>
                        <li><a class="black-text text-lighten-3" href="#!">Phone: 0359404798</a></li>
                        <li><a class="black-text text-lighten-3" href="https://vinhomes.vn/vi">Vinhomes Grand Park, Quận 9, TPHCM</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
