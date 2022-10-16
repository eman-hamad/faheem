import React, { useState } from 'react';
import '../../convertion/App.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const header = ({ BGcolor, Fcolor }) => {
    const classes = `header ${BGcolor}` 
    const headFont = `header__secLink ${Fcolor}`

    return (
        <div className={classes} >
            <Link className="header__link" to="sign-in">التسجيل</Link>
            <div className="header__sections">
                <Link className={headFont}><p>الأسئلة الشائعة</p></Link>
                <Link className={headFont}><p>الدورات</p></Link>
                <Link className={headFont} to="/teachers"><p>اعثر على معلم</p></Link>
                <Link className={headFont} to="/"><p>الرئيسية</p></Link>
            </div>
            <img src={logo} className="header__logo"/>
        </div>
    );
}
 
export default header;