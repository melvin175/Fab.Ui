import React from 'react'
import styled from 'styled-components'



function Modal() {
    return (
        <Container>
        <Title>
        <h1># Modal</h1>
        <p>A modal is a dialog box/popup window that is displayed on top of the current page: Open Modal. ×</p>   
        </Title>
        <Modals>
        <div class="carbon.container">
        <iframe src="https://codesandbox.io/embed/modal-2b84p?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{width:'100%', height:'500px', border:'0', overflow:'auto'}}
        title="Modal"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Modals>
        </Container>
    )
}

export default Modal

const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Modals = styled.div`
padding: 2rem;
`