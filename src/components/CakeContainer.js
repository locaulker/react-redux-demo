import React from "react"
import { connect } from "react-redux"
import { buyCake } from "../redux"

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// step 1 - define selectors
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  }
}

// step 2 -
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

// step 3 -

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
