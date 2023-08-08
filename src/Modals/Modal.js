import React , {Fragment} from 'react';
import styles from './modal.module.css';
import  ReactDom  from 'react-dom';


// overlay that is the pop window u can look in css file to know more about it
const OverLay = ({closemodal , show})=>(
    <div 
        className={`${styles.overLay} ${show ? styles.showOverLay: null}`}>
            <h1>Hello abdelamlek</h1>
            <h4>this is pop up window that u can add ur info here</h4>
            <button onClick={closemodal} className={styles.btn}>X</button>
    </div> 
    );

const BackDrop = ({closemodal , show }) => {
    // this is used for closing the pop up window by clicking in any div in website
    // backdrop that takes style position fixed and in index.html take the div on the
    // top of the page and give it the id modal
    return ( <div
        onClick={closemodal}
        className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`} >
        </div> 
    );
}



const Modal = ({show , close}) => {
    return show &&  ( 
    <Fragment>
            {/* {ReactDom.createPortal( <BackDrop />,document.getElementById('BackDrop'))}
            {ReactDom.createPortal( <OverLay />,document.getElementById('OverLay'))} */}
            {/* here we use ReactDom.createPortal( content , where we will bind it) to 
                render the content in page by using index.html  */}
            {ReactDom.createPortal(
            <Fragment>
                <BackDrop closemodal ={close} show={show} />
                <OverLay closemodal ={close} show={show}/>
            </Fragment> ,document.getElementById('modal'))}
    </Fragment>
    );
}
export default Modal;