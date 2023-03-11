import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({ token: '', user: {} })
    const [isLoading, setIsLoading] = useState(true)

    // const logout = () => {
    //     localStorage.removeItem('loggeInUser')
    //     setLoggedInUser({})
    // }

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser')
        const parsedUser = JSON.parse(storedUser) || {}

        if (parsedUser.user) {
            setLoggedInUser({ ...parsedUser })
        }
        setIsLoading(false)
    }, [])

    return (
        <AuthContext.Provider value={{ isLoading, loggedInUser, setLoggedInUser }}>
            {props.children}
        </AuthContext.Provider>
    )
} 