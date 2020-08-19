import React, { useState } from 'react'

const useToggle = (initialValue = false) => {

    const [state, setState] = useState(initialValue)

    const toggle = () => {
        setState(!state)
    }
    // Return piece of state and the function to toggle it
    return [state, toggle];
}

export default useToggle;
