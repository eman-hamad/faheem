import React from 'react';
import { MdClose } from 'react-icons/md';
import{ motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const sideBarVariants = {
    hidden:{
      x:'-100vw'
    },
    visible:{
      x: 0,
      transition:{
        duration: .6,
      }
    },
    exit:{
      x: '-100vw',
      transition:{ ease: 'easeInOut', duration: .4 }
    }
}

const sideDrawer = (props) => {
    return (
        <AnimatePresence>
            {props.sideDrawer ? 
            <motion.div 
                variants={sideBarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="home__sideDrawer">
                <b className="home__headSideElement">
                    <MdClose className="home__sideDrawer__close" onClick={props.click}/>
                    <Link className="home__link" to="/"><b>الرئيسية</b></Link>
                </b>
                <Link className="home__sideElement" to="/teachers">اعثر على معلم</Link>
                <Link className="home__sideElement">الدورات</Link>
                <Link className="home__sideElement">لاسئلة الشائعة</Link>
                <Link className="home__sideElement" to="/sign-in">التسجيل</Link>
            </motion.div> : null }
        </AnimatePresence>
    );
}
 
export default sideDrawer;