import React from 'react'
import styled from 'styled-components'


function Form() {
    return (
        <Container>
        <Title>
        <h1># Form</h1>
        <p>A webform, web form or HTML form on a web page allows a user to enter data that is sent to a server for processing. ... For example, forms can be used to enter shipping or credit card data to order a product, or can be used to retrieve search results from a search engine.</p>
        </Title>
        <Forms>
        <div class="carbon.container">
        <iframe src="https://codesandbox.io/embed/admiring-hoover-0pob6?fontsize=14&hidenavigation=1&theme=dark&view=preview"
        style={{width:'100%', height:'500px', border:'0', overflow:'autos'}}
        title="admiring-hoover-0pob6"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
        </div>
        </Forms>
        </Container>
    )
}

export default Form

const Container= styled.div``

const Title = styled.div`
    padding: 3rem;
    color: black;
    p{
        margin-top: 2rem;
        font-size: 20px;
    }
`

const Forms = styled.div`
padding: 2rem;
`