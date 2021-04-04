import React from 'react'
import styled from 'styled-components'
import DownloadLink from "react-download-link"


const Download = () => {
    return (
        <Container>
        <Title>
        <h1># Download</h1>
        <p>Download the css file from below and add link it in your app to access all the components available.</p>
        </Title>
        <div class="download-css">
        <button>
            Save this Css
        </button>
        </div>
        <Downloads>
        <p>A component library is a cloud-based folder that consists of all the designed/styled parts of a website or piece of software. It helps designers to work in a consistent way and becomes very time efficient when executed correctly.</p>
        </Downloads>
        </Container>
    )
}

export default Download

const Container= styled.div`
    text-align: center;
    line-height: 35px;
    button{
        padding: 5px;
        margin: 1rem;
        background-color: #cfcee8;
        border-radius: 5px;
        font-size: 24px;
        transition: all 0.3s ease 0s;
        border: none;
        cursor: pointer;
        :hover{
            border-radius: 5px;
            background-color: #bebbf7;
            box-shadow: 0px 50px 40px rgba(207, 205, 255, 0.4);
            transform: translateY(-7px);       
        }
    }
`

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Downloads = styled.div`
text-align: center;
font-size: 1.3rem;
padding: 2rem;
`
