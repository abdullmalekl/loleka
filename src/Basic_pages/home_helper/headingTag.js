import React from "react";
import styles from "./home_helper.module.css";
const HeadingTag = ()=>{
  return(
    <div className={styles.headingTag}>
        <h3 className={styles.font}>House Control IOT Automation Platform</h3>
        <a className={styles.btn1}>Get Quote</a>
    </div>
  );

}
export default HeadingTag;