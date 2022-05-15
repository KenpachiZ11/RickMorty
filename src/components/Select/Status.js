import React from 'react'
import styles from '../Select/Status.module.css'
import { useState } from 'react'

const Status = ({select, setSelect}) => {
    const [isActive, setActive] = useState(false)
    const status = ['Alive', 'Dead', 'Unknown']
    const push = (e) => setActive(!isActive)
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdown_btn} onClick={push}>{select}</div>
            {isActive && (
                <div className={styles.dropdown_content}>
                    {status.map((state) => (
                        <div onClick={(e) => {
                            setSelect(state)
                            setActive(false)
                        }}
                        className={styles.dropdown_content__item}>
                            {state}
                        </div>    
                    ))}
                </div>    
            )}
        </div>
    )
}

export default Status