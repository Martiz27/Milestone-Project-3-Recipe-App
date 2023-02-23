import { useEffect, createContext, useState } from 'react';

import Cookies from 'universal-cookie'

export const CurrentUser = createContext()

function CurrentUserProvider(props) {

    const cookies = new Cookies()

    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch(`http://localhost:5000/auth/profile`, {
                headers: {
                    'Authorization': `Bearer ${cookies.get('TOKEN')}`
                }
            })
            let user = await response.json()
            setCurrentUser(user)
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