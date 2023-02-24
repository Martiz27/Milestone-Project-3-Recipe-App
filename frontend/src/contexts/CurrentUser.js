import { useEffect, createContext, useState } from 'react';

import Cookies from 'universal-cookie'

export const CurrentUser = createContext()

function CurrentUserProvider(props) {

    const cookies = new Cookies()

    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const getLoggedInUser = async () => {
            const response = await fetch(`http://localhost:5000/auth`, {
                // method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            let resData = await response.json()
            // console.log(`Provider getting response: ${resData}`)
            // console.log(`Provider: getting logged in user ${resData}`)
            // if (response) {
            //     setCurrentUser(resData)
            // } 
        }
        getLoggedInUser()
    }, [])


    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            <>{props.children}</>
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider;