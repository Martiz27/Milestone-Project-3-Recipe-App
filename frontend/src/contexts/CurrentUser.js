import { useEffect, createContext, useState } from 'react';
// import Cookies from 'universal-cookie'

// Create Current User Context
export const CurrentUser = createContext()

// Current User Provider
function CurrentUserProvider(props) {

    // const cookies = new Cookies()

    // useState for current user
    const [currentUser, setCurrentUser] = useState(null)

    // useEffect to check if a user is logged in with a token
    useEffect(() => {
        const getLoggedInUser = async () => {
            const response = await fetch(`http://localhost:5000/auth`, {
                // method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let resData = await response.json()

            // if response status is OK setCurrentUser
            if (response.status === 200) {
                console.log(`Provider: current user is being set... ${JSON.stringify(Object(resData))}`)
                setCurrentUser(resData)
            }
        }
        getLoggedInUser()
    }, [])


    // Return the Provider and State
    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            <>{props.children}</>
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider;