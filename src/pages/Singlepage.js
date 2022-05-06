import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Singlepage = () => {
    const {id} = useParams()
    const [post, setPost] = useState([])

    let { name, location, origin, gender, image, status, species } = post
    let api = `https://rickandmortyapi.com/api/character/${id}`

    useEffect(() => {
        // (async function() {
        //     let data = await fetch(api).then((res) => res.json())
        //     setPost(data)
        // })()

        // (async function() {
        //     const res = await fetch(api)
        //     const data = await res.json()
        //     setPost(data)
        // })()

        fetch(api)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [api])


    return (
        <div className='container'>
            <h1 className='container-title'>{name}</h1>
            <div className='cointainer-box'>
                <div className='cointainer-box__img'>
                    <img 
                        src={image} 
                        alt={name}>
                    </img>
                </div>
                <div className='cointainer-box__text'>
                    <div className='content'>
                        <div className=''>
                            <span className=''>Location:</span>{location?.name}
                        </div>
                        <div className=''>
                            <span className=''>Origin:</span>{origin?.name}
                        </div>
                        <div className=''>
                            <span className=''>Gender:</span>{gender}
                        </div>
                        <div className='df'>
                            <span className=''>Status:</span>{
                                status === 'Alive' ? (<div className='text__green'>{status}</div>) :
                                status === 'unknown' ? (<div className='text__grey'>{status}</div>) :
                                status === 'Dead' ? (<div className='text__red'>{status}</div>) :
                                undefined}
                        </div>
                        <div className=''>
                            <span className=''>Spesies:</span>{species}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Singlepage}