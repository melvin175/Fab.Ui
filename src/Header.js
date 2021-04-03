import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <HeaderLogo>
            <h1>Fab-Ui</h1>
            </HeaderLogo>
        </Container>
    )
}

export default Header

const Container = styled.div`
width: 100%;
height: 70px;
color: white;
background-color: #8a9094;
border-radius: 3px;
`

const HeaderLogo = styled.div`
    
    display: flex;
    img{
        height: 80px;
    }
    
    h1{
        padding: 0.7rem;
        margin-left: 1rem;
    }
    
`

