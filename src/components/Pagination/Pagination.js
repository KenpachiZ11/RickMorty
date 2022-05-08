import React from 'react'
import ReactPaginate from 'react-paginate'
import styles from '../Pagination/Pagination.module.css'



const Pagination = ({ pageNumber, setPageNumber, info }) => {
    return (
        <ReactPaginate 
            className={styles.content}
            pageCount={info?.pages}
            onPageChange={(data) => {setPageNumber(data.selected + 1)}}
            forcePage={pageNumber === 1 ? 0 : pageNumber -1}
            nextClassName={styles.next}
            previousClassName={styles.prev}
            activeClassName={styles.active}
        />
    )
}

export default Pagination