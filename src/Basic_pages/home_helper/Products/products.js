import React from "react";
import styles from "./products.module.css";
import fire from './fire.JPG';
import temp from './temp.JPG';
import lockCard from './lockCard.JPG';
const ProductsComp = ()=>{
    return (
        <div className={styles.ProductsComp}>
            <p className={styles.header}>  PRODUCTS </p>
        <div className={styles.grid}>
            <div class="row">
            <div class="col">
                <img className={styles.fire} src={fire} />
                <p className={styles.Cheader1}>Fire Alarm</p>
                <p className={styles.Cbody1}>
                    this sensor can detect the smoke and work side by side with temprature sensor to detect real fire
                    </p>
            </div>
            <div class="col">
            <img className={styles.temp} src={temp} />
            <p className={styles.Cheader2}>Temprature Sensor</p>
                <p className={styles.Cbody2}>
                    this sensor can monitoring real temprature for your House
                    </p>
            </div>
            <div class="col">
            <img className={styles.lockCard}  src={lockCard} />
            <p className={styles.Cheader3}>lockDoor by Card</p>
                <p className={styles.Cbody3}>
                    this sensor use cards to decide if you allowed to open or reject and send notifaction to phone
                    </p>
            </div>
            </div>
        </div>
        </div>
    );
}
export default ProductsComp;