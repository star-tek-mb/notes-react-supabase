import React, { useState, useEffect, useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { supabase } from '../supabase'

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const session = supabase.auth.session()

        setUser(session?.user ?? null)
        setLoading(false)

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => {
            listener?.unsubscribe()
        }
    })

    const value = {
        login: (data) => supabase.auth.signIn(data),
        logout: () => supabase.auth.signOut(),
        user
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthRoute({ children, ...rest }) {
    const { user } = useAuth()
    return (
        <Route {...rest} render={() => user ? (children) : (<Redirect to='/login' />)} />
    )
}
