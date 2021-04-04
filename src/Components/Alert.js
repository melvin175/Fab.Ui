import React from 'react'
import styled from 'styled-components'

function Alert() {
    return (
        <Container>
        <Title>
        <h1># Alert</h1>
        <p>In computing, an avatar (also known as a profile picture or userpic) is a graphical representation of a user or the user's character or persona.</p>
        </Title>
        <Alerts>
        <div class="carbon.container">
        <iframe src="https://codesandbox.io/embed/alert-odyup?fontsize=14&hidenavigation=1&theme=dark&view=preview"
         style={{width:'100%', height:'500px', border:'0', overflow:'auto'}}
         title="Alert"
         allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
         sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Alerts>
        </Container>
    )
}

export default Alert

const Container= styled.div``

const Title = styled.div`
    padding: 5rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Alerts = styled.div`
padding: 2rem;
`