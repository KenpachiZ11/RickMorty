import { Link } from "react-router-dom"

const Notfound = () => {
    return (
        <div>
            <h1>Notfound. Go to <Link to='/'>Home</Link></h1>
        </div>
    )
}

export {Notfound}