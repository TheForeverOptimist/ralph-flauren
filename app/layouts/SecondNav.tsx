import React from 'react'
import styles from './SecondNav.module.css'

export default function SecondNav() {
    return (
      <>
        <div className="mt-[7vh] h-[12vh] bg-black hover:bg-white text-white hover:text-black flex items-center w-full ">
          <p className="ml-10 mr-20 text-md font-serif">Ralph Flauren</p>
          <p className={styles.plinks}>Men</p>
          <p className={styles.plinks}>Women</p>
          <p className={styles.plinks}>Kid & Baby</p>
          <p className={styles.plinks}>Home</p>
          <p className={styles.plinks}>Gifts</p>
          <p className={styles.plinks}>Discover</p>
        </div>
      </>
    );
}