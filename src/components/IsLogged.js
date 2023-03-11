import React, { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

const IsLogged = props => {

    const { isLoading, loggedInUser } = useContext(AuthContext)

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!loggedInUser.user._id) {
        return <Navigate to="/login" />
    }

    return props.children
}

export default IsLogged 