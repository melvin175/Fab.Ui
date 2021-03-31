import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <HeaderLogo>
            <img src={"https://images.vexels.com/media/users/3/127969/isolated/preview/5474df9a9af5055b6c1691cef7aee903-hand-drawn-flying-swallow-by-vexels.png"}/>
            <h1>Fab-Ui</h1>
            </HeaderLogo>
        </Container>
    )
}

export default Header

const Container = styled.div`
background-image: url('https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
height: 70px;
color: white;
background-color: #8e9aaf;
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

