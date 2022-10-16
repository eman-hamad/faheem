import React, { useState } from 'react';
import '../../convertion/App.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi'
import { BsFilterLeft } from 'react-icons/bs';
import userImg from '../../images/user.png';
import Bars from '../../components/bars/bars';
import SideDrawer from '../../components/sideDrawer/sideDrawer';

const teachers = () => {
    const [sideDrawer, setSideDrawer] = useState(false);

    const onClickSideDrawer = () =>{
        setSideDrawer(!sideDrawer)
    }
    return (
        <div className="teachers">
            <Header BGcolor="white" Fcolor="black"/>

            <Bars click={onClickSideDrawer}/>
            <SideDrawer click={onClickSideDrawer} sideDrawer={sideDrawer}/>

            <div className="teachers__middle">

                <div className="teachers__filter">
                    <Link className="teachers__wordIcon">
                        <h3>فلترة</h3>
                        <BsFilterLeft className="teachers__icon"/>
                    </Link>
                    <Link className="teachers__wordIcon">
                        <h3>ابحث عن معلم</h3>
                        <BiSearch className="teachers__icon"/>
                    </Link>
                    <select className="teachers__dropSelect">
                        <option>اختر الماده</option>
                    </select>
                    <select className="teachers__dropSelect">
                        <option>..اختر المرحلة</option>
                        <option>المرحلة الابتدائية</option>
                        <option>المرحلة المتوسطه</option>
                        <option>المرحلة الثانوية</option>
                        <option>المرحلة الجامعية</option>
                    </select>
                </div>

                <div className="teachers__secondSection">
                    <h2 className="teachers__subhead">النتائج: 127 معلم</h2>
                    <div className="teachers__sample">
                        <div className="teachers__salary">
                            <div className="teachers__sPh">
                                <h3 >متوسط السعر بالساعه</h3>
                                <h3 className="teachers__salFlex">ساعه<h1>/ريال100</h1></h3>                        
                            </div>
                            <Link className="teachers__bookNow">احجز الان</Link>
                        </div>
                        <div className="teachers__details">
                            <h1 className="teachers__name">محمد عبدالسلام</h1>
                            <div className="teachers__stars">
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/> 
                            </div>
                            <p className="teachers__par">بكالريوس علم الأحياء - ماجستير علم الأحياء الدقيقة - طالب دكتوراه الآن في تخصص علم الطفيليات - المواد التي اقوم بتدريسها لطلاب الجامعات (علم الوراثة، علم الأحياء الدقيقة، علم الأنسجة، علم الأجنة، وعلم المورفولجي والفسيولوجي .... الخ. - ولطلاب المرحلة الثانوية علم</p>
                            <div className="teachers__experience">
                                <h2 className="teachers__point"> الخبرة 6 ~ 10 سنوات</h2>
                                <h2 className="teachers__point">طالب دكتوراه</h2>
                            </div>
                        </div>
                        
                        <img src={userImg} className="teachers__userImg" />
                        
                    </div>
                </div>

            </div>             
            <Footer BGcolor="grey"/>
        </div>

    );
}
 
export default teachers;