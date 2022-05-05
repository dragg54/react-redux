import React from 'react'
import buyCake from '../redux/cakes/cakesAction';
import {connect} from 'react-redux'

function CakesContainer(props) {
  return (
    <>
      <h2>Number of cakes - {props.noOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
}
const mapStateToProps=(state)=>{
  return{
    noOfCakes: state.noOfCakes
  };
}

const mapDispatchToProps =dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(CakesContainer)