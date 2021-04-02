import React from 'react'
import styled from 'styled-components'

function Badges() {
    return (
        <Container>
        <Title>
        <h1># Badge</h1>
        <p>Badges or stickers are small images in some World Wide Web pages which are typically used to promote programs that were used to create or host the site </p>
        </Title>
        <Badge>
        <div class = "carbon-container">
        <iframe src="https://codesandbox.io/embed/badge-8nwpb?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{width:'100%', height:'500px', border:'0', overflow:'auto'}}
        title="Badge"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Badge>
        </Container>
    )
}

export default Badges

const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Badge = styled.div`
padding: 3rem;
`