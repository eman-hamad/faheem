import React,{ useState } from 'react';
import Bars from '../../components/bars/bars';
import SideDrawer from '../../components/sideDrawer/sideDrawer';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import '../../convertion/App.css';
import { Link } from 'react-router-dom';

const signIn = () => {
    const [sideDrawer, setSideDrawer] = useState(false);

    const onClickSideDrawer = () =>{
        setSideDrawer(!sideDrawer)
    }
    return (
        <div className="signIn">
            <Header BGcolor="white" Fcolor="black"/>
            
            <Bars click={onClickSideDrawer}/>
            <SideDrawer click={onClickSideDrawer} sideDrawer={sideDrawer}/>

            <div className="signIn__middle">
                <h1 className="signIn__header">تسجيل الدخول</h1>
                <div className="signIn__inButton">
                    <input type="text" placeholder="051 234 5678" className="signIn__input"/>
                    <Link className="signIn__button">ارسال الكود</Link>
                </div>
            </div>            

            <Footer BGcolor="grey"/>
        </div>
    );
}
 
export default signIn;