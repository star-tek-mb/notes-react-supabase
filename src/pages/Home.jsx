import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MainContainer, LinkButton, Button, Title, Menu, Buttons } from '../components/Common'
import { useAuth } from '../contexts/Auth'
import { supabase } from '../supabase'

const Content = styled.div`
    margin-top: 20px;

    display: flex;
    flex-wrap: wrap;
    color: white;
    gap: 20px;
`

const NoteCard = styled(Link)`
    flex-basis: calc(50% - 10px); // gap/2
    overflow-y: auto;
    max-height: 400px;
    border: 1px solid teal;
    border-radius: 10px;
    padding: 10px;

    text-decoration: none;
    color: inherit;

    @media (max-width: 500px) {
        flex-basis: 100%;
    }
`

export default function Home() {
    const { logout } = useAuth()
    const [notes, setNotes] = useState([])

    useEffect(async () => {
        let { data } = await supabase.from('notes').select('*')
        setNotes(data)
    }, [])

    return (
        <MainContainer>
            <Menu>
                <Title>Notes</Title>
                <Buttons>
                    <LinkButton to="/create">+</LinkButton>
                    <Button onClick={() => logout()}>Log out</Button>
                </Buttons>
            </Menu>
            <Content>
                {notes.length > 0 ? notes.map(note => (
                    <NoteCard key={note.id} to={"/" + note.id}>
                        {note.content}
                    </NoteCard>
                )) : (<Title>Empty now, create a new note</Title>)}
            </Content>
        </MainContainer>
    )
}
