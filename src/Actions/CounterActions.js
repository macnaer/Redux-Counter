export const counterPlus = () => {
    return{
           type: "PLUS",
    }
}

export const counterMinus = () => {
    return{
           type: "MINUS",
    }
}

export const counterMultiply = (multiply) => {
    console.log("ACTION ", multiply)
    return {
        type: "MULTIPLY",
        payload: multiply
    }
}