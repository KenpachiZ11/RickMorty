import { useState, useEffect } from "react"
import Cards from "../components/Cards/Cards"
import Search from "../components/Search/Search"
import Pagination from "../components/Pagination/Pagination"
import Status from "../components/Select/Status"


const Hero = () => {
    const [post, setPost] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [search, setSearch] = useState('')
    const [select, setSelect] = useState('Alive')
    const {info, results} = post

    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${select}`
    
    useEffect(() => {
        (async function() {
            const data = await fetch(api).then((res) => res.json())
            setPost(data)
        })()
    }, [api])


    return (
        <div style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center'
        }}>
        <div>
            <h1 style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            }}>Hero
        </h1>
        
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '30px'
        }}>
            <Status setSelect={setSelect} select={select}/>
            <Search setSearch={setSearch}/>
        </div>
        

        <div className='content_box'>
            <Cards results={results}/>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Pagination 
                info={info}
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            />
        </div>

        </div>
        </div>
    )
}

export {Hero}