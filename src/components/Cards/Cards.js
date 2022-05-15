import styles from '../Cards/Cards.module.css'
import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'


const { Meta } = Card;
const Cards = ({results}) => {
    let display

    if (results) {
        display = results.map(result => {
            const {id, name, status, image} = result
            return (
                <Link
                    key={id}
                    to={`/hero/${id}`}
                >
                    <Card
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            color: 'black'
                        }}
                        cover={
                            <img
                                alt={name} 
                                src={image} 
                            />
                        }
                    >
                        <Meta 
                            title={name} 
                            description={
                                status === 'Alive' ? (<p className={styles.green}>{status}</p>) :
                                status === 'unknown' ? (<p className={styles.grey}>{status}</p>) :
                                status === 'Dead' ? (<p className={styles.red}>{status}</p>) :
                                undefined
                            } 
                        />
                    </Card>
                </Link>
            )
        })
    } else {
        display = '404 not found'
    }
    
    return (
        <>{display}</>
    )
}

export default Cards