import React, { useState } from 'react';
import '../../convertion/App.css';
import Header from '../../components/header/header';
import { BiSearch } from 'react-icons/bi';  
import { Link } from 'react-router-dom';
import googlePlay from '../../images/play.jpg';
import appStore from '../../images/appStore.jpg';
import Footer from '../../components/footer/footer';
import Bars from '../../components/bars/bars';
import SideDrawer from '../../components/sideDrawer/sideDrawer';

const home = () => {
    const [sideDrawer, setSideDrawer] = useState(false);

    const onClickSideDrawer = () =>{
        setSideDrawer(!sideDrawer)
    }

    return (
        <div className="home">
            <Header />
            
            <Bars click={onClickSideDrawer}/>
            <SideDrawer click={onClickSideDrawer} sideDrawer={sideDrawer}/>
            <div className="home__middle">
                <h1>نساعدك ترفع درجاتك ، انطلق معنا</h1>
                <p className="home__sub">ابدأ الان ساعتك المجانية مع معلمك المفضل</p>
                <div className="home__select">
                    <Link className="home__search">
                        <h3>ابحث عن معلم</h3>
                        <BiSearch className="home__searchIcon"/>
                    </Link>
                    <select className="home__dropSelect">
                        <option>اختر الماده</option>
                    </select>
                    <select className="home__dropSelect">
                        <option>..اختر المرحلة</option>
                        <option>المرحلة الابتدائية</option>
                        <option>المرحلة المتوسطه</option>
                        <option>المرحلة الثانوية</option>
                        <option>المرحلة الجامعية</option>
                    </select>
                </div>
                <p className="home__add">
                    <Link className="home__add__underline">
                    اطلب اضافتها  
                    </Link>
                     لم تجد الماده التي تبحث عنها؟
                </p>
            </div>
            <div className="home__apps">
                <h2 className="home__headApps">.حمل التطبيق و انطلق معنا</h2>
                <div className="home__appsPhotos">
                    <img src={appStore} className="home__appPhoto"/>
                    <img src={googlePlay} className="home__appPhoto"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
 
export default home;