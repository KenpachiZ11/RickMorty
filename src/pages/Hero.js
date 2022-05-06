import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Heroes } from "../components/Heroes"
import Pagination from '../components/Pagination';



const Hero = () => {

    const [posts, setPost] = useState([])
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)
    // const {info, results} = posts


    const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

    useEffect(() => {
        (async function() {
            let data = await fetch(api).then(res => res.json())
            setPost(data.results)
        })()
    }, [api])
    // const getPosts = async () => {
    //     const res = await fetch(getApi)
    //     const data = await res.json()
    //     setPosts(data.results)
    // }

    // useEffect(() => {
    //     // getPosts()
    //     fetch(api)
    //         .then(res => res.json())
    //         .then(data => setPost(data.results))
    // }, [api])

    const updateSearch = e => setSearch(e.target.value)
    const filterHero = posts.filter(hero => {
        return hero.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='box'>
            <h1 className='title'>Hero</h1>
            
            <form className='form-search'>
                <input
                    placeholder='Search'
                    className='form-input'
                    type='text'
                    onChange={updateSearch}
                />
            </form>

            <div className='info-hero'>
                {
                    filterHero.map(post => (

                        <Link 
                            key={post.id} 
                            to={`/hero/${post.id}`}
                            style={{color: 'black'}}    
                        >
                            <Heroes
                                name={post.name}
                                image={post.image}
                                status={post.status}
                            />
                        </Link>
                    ))
                }
            </div>
            {/* <Pagination
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                info={info}
            /> */}
        </div>
    )
}

export {Hero}