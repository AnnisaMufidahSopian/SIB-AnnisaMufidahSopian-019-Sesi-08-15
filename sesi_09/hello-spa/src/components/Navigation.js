import {Link, useNavigate} from 'react-router-dom'

function Navigation(){
    let navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate("/")
    }
    return(
        <nav>
            <Link to = "/">Home</Link> | {" "}<Link to = "/about">About Me</Link> | {" "}
            <Link to = "/members">Members</Link> | {" "} 
            <Link to = "/items">Items</Link> | {" "}
            <Link to = "/test">Test</Link> | {" "}
            {localStorage.getItem("token") &&
            <button className = "logout-button" onClick={()=>handleLogout()}>
                Logout
            </button>}
        </nav>
    )
}

export default Navigation