import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
import { MainContainer, LinkButton, Button, Title, Menu, Buttons, Textarea } from '../components/Common'
import { useAuth } from '../contexts/Auth'
import { supabase } from '../supabase'

const Content = styled.div`
    & > * {
        margin-top: 20px;
    }
`

export default function EditNote() {
    const { user, logout } = useAuth()
    const [content, setContent] = useState('')
    const { slug } = useParams()
    const history = useHistory()

    const handleSave = async () => {
        await supabase.from('notes').update([
            { user_id: user.id, content: content }
        ]).eq('id', slug)
        history.push('/')
    }

    const handleDelete = async () => {
        await supabase.from('notes').delete().eq('id', slug)
        history.replace('/')
    }

    useEffect(async () => {
        let { data: note } = await supabase.from('notes').select('*').single().eq('id', slug)
        setContent(note.content)
    }, [])

    return (
        <MainContainer>
            <Menu>
                <Title>Edit a note</Title>
                <Buttons>
                    <LinkButton to="/">Back</LinkButton>
                    <Button onClick={() => logout()}>Log out</Button>
                </Buttons>
            </Menu>
            <Content>
                <Textarea placeholder="Type here..." rows="20" value={content} onChange={(e) => setContent(e.target.value)}></Textarea>
                <Buttons>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </Buttons>
            </Content>
        </MainContainer>
    )
}
