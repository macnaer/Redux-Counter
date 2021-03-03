const initialState = {
    counter: 0
}

const CounterReduser = (state = initialState, action) => {
    switch(action.type){
        case "PLUS": 
            return{
                counter: state.counter+=1
            }
        case "MINUS":
            return{
                counter: state.counter-=1
            }

        case "MULTIPLY":
              console.log("REDUCER ", action.payload)
            return{
                counter: state.counter * action.payload
            }
        default:
            return state;
    }
}

export default CounterReduser;