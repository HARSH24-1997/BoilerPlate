import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../Redux'

function cakeContainer (props) {
    return (
        <div>
<h1>Number Of Cake - {props.numOfCakes}</h1>
            <button onClick = {props.buyCake}>Buy Cake</button>   
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(cakeContainer)
