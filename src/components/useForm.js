import React, { useState } from 'react'

export default initialValue => {

    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const reset = () => {
        setValue("")
    }

    return [value, handleChange, reset];

};

// Despues cuando uso useForm en cualquier formulario, lo haria de la siguiente forma

// Supongamos que es 'Age'

// const [age, handleAgeChange, resetAge] = useForm("")
