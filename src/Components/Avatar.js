import React from 'react'
import styled from 'styled-components'
import styles from '../Components/component.css'


function Avatar() {
    return (
        <Container>
        <Title>
           <h1># Avatar</h1>
           <p>In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona.</p>
        </Title>
        <Avatars>
        
        <div class="carbon.container">
        <iframe src="https://codesandbox.io/embed/avatar-3v4sd?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{width:'100%', height:'500px', border:'0', overflow:'auto'}}
        title="Avatar"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Avatars>
        </Container>
    )
}

export default Avatar


const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Avatars = styled.div`
padding: 2rem;
`