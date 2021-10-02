import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { MainContainer, LinkButton, Button, Title, Menu, Buttons, Textarea } from '../components/Common'
import { useAuth } from '../contexts/Auth'
import { supabase } from '../supabase'

const Content = styled.div`
    & > * {
        margin-top: 20px;
    }
`

export default function CreateNote() {
    const { user, logout } = useAuth()
    const [content, setContent] = useState('')
    const history = useHistory()

    const handleSave = async () => {
        await supabase.from('notes').insert([
            { user_id: user.id, content: content }
        ])
        history.push('/')
    }

    return (
        <MainContainer>
            <Menu>
                <Title>Create a note</Title>
                <Buttons>
                    <LinkButton to="/">Back</LinkButton>
                    <Button onClick={() => logout()}>Log out</Button>
                </Buttons>
            </Menu>
            <Content>
                <Textarea placeholder="Type here..." rows="20" value={content} onChange={(e) => setContent(e.target.value)}></Textarea>
                <Button onClick={handleSave}>Save</Button>
            </Content>
        </MainContainer>
    )
}
