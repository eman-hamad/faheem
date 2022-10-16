import React from 'react';
import '../../convertion/App.css';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const footer = ({ BGcolor }) => {
    const classes = `footer ${BGcolor}`
    return (
        <div className={classes}>
            <p className="footer__caption">جميع الحقوق محفوظه لفهيم 2021.</p>
            <div className="footer__social">
                <Link className="footer__app"><AiOutlineInstagram/></Link>
                <Link className="footer__app"><AiOutlineTwitter/></Link>
                <Link className="footer__app"><AiFillFacebook/></Link>
            </div>
        </div>
    );
}
 
export default footer;