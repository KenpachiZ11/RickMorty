import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../Cards/Cards.module.css'

const Singlepage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])

    let { name, location, origin, gender, image, status, species } = post
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [api])


    return (
        <div className={styles.content}>
            <h1>{name}</h1>
            <div className={styles.content_box}>
                <div className={styles.content_box__image}>
                    <img
                        src={image}
                        alt={name}
                        ></img>
                </div>
                <div className={styles.content_box__info}>
                    <div><span>Location:</span>{location?.name}</div>
                    <div><span>Origin:</span>{origin?.name}</div>
                    <div><span>Gender:</span>{gender}</div>
                    <div style={{
                        display: 'flex'
                    }}><span>Status:</span>{
                        status === 'Alive' ? (<div className={styles.green_2}>{status}</div>) :
                        status === 'unknown' ? (<div className={styles.grey_2}>{status}</div>) :
                        status === 'Dead' ? (<div className={styles.red_2}>{status}</div>) :
                        undefined
                    }</div>
                    <div><span>Species:</span>{species}</div>
                </div>
            </div>
        </div>

    )
}

export {Singlepage}