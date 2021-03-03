import React, { Fragment} from "react";
import "./Counter.css";

const Counter = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                         <h2>Counter</h2>
                         <span className="counter">0</span>
                         <button type="button" className="btn btn-success plus">Plus</button>
                         <button type="button" className="btn btn-warning minus">Minus</button>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}

export default Counter;