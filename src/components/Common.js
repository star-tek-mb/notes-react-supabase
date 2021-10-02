import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Title = styled.h1`
    color: white;
    letter-spacing: 0.3rem;
`

export const Button = styled.button`
    appearance: none;
    outline: none;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.3rem;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

export const LinkButton = styled(Link)`
    text-decoration: none;

    appearance: none;
    outline: none;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.3rem;

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

export const MainContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`

export const Buttons = styled.div`
    & > * {
        margin-left: 20px;
    }
`

export const Input = styled.input`
    appearance: none;
    outline: none;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 15px 20px;
    font-size: 1.1rem;
    color: white;
    background-color: inherit;
    letter-spacing: 0.3rem;
`

export const Textarea = styled.textarea`
    appearance: none;
    outline: none;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 15px 20px;
    font-size: 1.1rem;
    color: white;
    background-color: inherit;
    letter-spacing: 0.3rem;
    width: 100%;
`