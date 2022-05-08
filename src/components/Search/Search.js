import React from 'react'
import styles from '../Search/Search.module.css'

const Search = ({setSearch}) => {
    return (
        <form className={styles.form_search}> 
            <input 
                onChange={e => {
                    setSearch(e.target.value)
                }}
                type='text' 
                placeholder='Search' 
                className={styles.form_input}></input>
        </form>
    )
}

export default Search