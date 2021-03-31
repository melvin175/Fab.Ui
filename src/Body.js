import React from 'react'
import styled from 'styled-components'
import SideNav from './SideNav'
import Alert from '../src/Components/Alert'
import Avatar from '../src/Components/Avatar'
import Badges from '../src/Components/Badges'
import Button from  '../src/Components/Button'
import Card from '../src/Components/Card'
import Form from '../src/Components/Form'

function Body() {
    return (
        <Container>
           <Nav>
           <SideNav/>
            </Nav>
           <Doc>
            <Alert/>
            <Avatar/>
            <Badges />
            <Button />
            <Card />
            <Form />
           </Doc>
        </Container>
    )
}

export default Body

const Container = styled.div`
    display:flex;   
    border-radius: 5px;
`
const Nav = styled.div`
    width: 30%;
`

const Doc = styled.div`
    width: 100%;
    background-color: #eee7e7;
    border-radius: 5px;
`