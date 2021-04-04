import React from 'react'
import styled from 'styled-components'
import SideNav from '../src/SideNav'
import Alert from '../src/Components/Alert'
import Avatar from '../src/Components/Avatar'
import Badges from '../src/Components/Badges'
import Button from  '../src/Components/Button'
import Card from '../src/Components/Card'
import Form from '../src/Components/Form'
import Modal from '../src/Components/Modal'
import Introduction from '../src/Components/Introduction'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

function Body() {
    return (
    <Container>
        <Router>
           <Nav>
           <SideNav/>
           </Nav>
           <Doc> 
            <div className="code">
            <Route path="/introduction" component={Introduction} />
            <Route path="/alert" component={Alert}/>
            <Route path="/avatar" component={Avatar}/>
            <Route path="/badge" component={Badges} />
            <Route path="/button" component={Button} />
            <Route path="/card" component={Card} />
            <Route path="/form" component={Form} />
            <Route path="/modal" component={Modal} />
            </div>
           </Doc>
        </Router>
    </Container>
    )
}


export default Body

const Container = styled.div`
    display: flex;
    border-radius: 5px;
    
`
const Nav = styled.div`
    border-radius: 5px;
    background-color: #DEE2FC;
    width: 30%;
   
`

const Doc = styled.div`
    width: 100%;
    background-color: #eaf6ec;
    border-radius: 5px;
`