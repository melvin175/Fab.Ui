import React from 'react'
import styled from 'styled-components'
import { FiGithub } from 'react-icons/fi'

function Header() {
    return (
        <Container>
            <HeaderLogo>
            <h1>Fab-Ui</h1>
            <a href={'https://github.com/melvin175/Fab.Ui'}>
            <button>
            <FiGithub/> Github
            </button></a>
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
    overflow: hidden;
    h1{
       float: left;
        padding: 0.7rem;
        margin-left: 1rem;
    }
   

    button{
        float: right;
        padding: 5px;
        margin: 1rem;
        background-color: #2EE59D;
        border-radius: 5px;
        font-size: 24px;
        transition: all 0.3s ease 0s;
        border: none;
        cursor: pointer;
        :hover{
            border-radius: 5px;
            background-color: #71db72;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            transform: translateY(-7px);       
        }
    }
    
`

