import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

import { Title, Button, Input } from '../components/Common'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;

    & > :not(:last-child) {
        margin-bottom: 20px;
    }
`

export default function Login() {
    const [email, setEmail] = useState('')
    const { user, login } = useAuth()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error } = await login({ email })
        if (error) {
            alert('Login error')
        }
        alert('Check your email for login link')
    }

    /*useEffect(() => {
        let timeout = setTimeout(() => {
            if (user) {
                history.replace('/')
            }
        }, 1000)
        return () => clearTimeout(timeout)
    }, [])*/

    useEffect(() => {
        if (user) {
            history.replace('/')
        }
    }, [user])

    return (
        <Container>
            <Title>Login to use Notes</Title>
            <Input placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={handleSubmit}>Login</Button>
        </Container>
    )
}
