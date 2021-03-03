import React, { Fragment} from "react";
import { connect } from "react-redux";
import { counterPlus, counterMinus } from "../../Actions/CounterActions";
import "./Counter.css";

const Counter = ({counter, counterPlus, counterMinus}) => {
    console.log("Counter inside component => ", counter);

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                         <h2>Counter</h2>
                         <span className="counter">{counter}</span>
                         <button type="button" className="btn btn-success plus" onClick={counterPlus}>Plus</button>
                         <button type="button" className="btn btn-warning minus" onClick={counterMinus}>Minus</button>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

const mapStateToProps = ({CounterReducer}) =>{
    console.log("mapStateToProps ", CounterReducer);
    const { counter } = CounterReducer;
    return { counter }
}
const mapDispatchToProps ={
    counterPlus,
    counterMinus
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);