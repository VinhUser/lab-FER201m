import React from "react";
import '../css/Detail.css';

export default function ModelCase({ films }){
    return(
        <div className="modal-show">
            <div id="modal1" className="modal" style={{display: 'block', top: '20%'}}>
                <div className="modal-content">
                    <h4>Video for {films.title} </h4>
                    <p><iframe width="100%" height="400px" src={films.video} title={films.title}></iframe></p>
                </div>
                <div className="modal-footer">
                    <button className="Modal-close red-text" >&times;</button>
                </div>
            </div>
        </div>
    )

}