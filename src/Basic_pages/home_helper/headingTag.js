
import styles from "./home_helper.module.css";
const HeadingTag = ({show})=>{
  return(
    <div className={styles.headingTag}>
        <h3 className={styles.font}>House Control IOT Automation Platform</h3>
        <a onClick={show} className={styles.btn1}>Get Quote</a>
    </div>
  );

}
export default HeadingTag;