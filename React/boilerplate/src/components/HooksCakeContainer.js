import React from 'react'
import {useSelector, useDispatch } from 'react-redux'

function HooksCakeContainer() {
    const cakes=useSelector(state => state.numOfcakes)
    const dispatch=useDispatch()
    return (
        <div>
<h1>Cakes- {cakes}</h1>
        </div>
    )
}

export default HooksCakeContainer
//usage Warning