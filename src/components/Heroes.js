import React from 'react'
import { Card } from 'antd';



const { Meta } = Card;
const Heroes = ({ name, image, status }) => {

    return (
        <div className='info'>
            <div className='info-children'>
                <Card
                    style={{ cursor: 'pointer' }}
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
                        status === 'Alive' ? (<p className='green'>{status}</p>) :
                        status === 'unknown' ? (<p className='grey'>{status}</p>) :
                        status === 'Dead' ? (<p className='red'>{status}</p>) :
                        undefined
                    }
                />
                </Card>
            </div>
        </div>
        
    )
}

export {Heroes}
