import React, { useState } from 'react'

const SimpleFormHooks = () => {


    const [email, setEmail] = useState("")
    console.log(email)

    return (
        <div>
            <h1>The Value is...{email}</h1>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={() => setEmail('')} type="submit">Submit!</button>
        </div>
    )
}

export default SimpleFormHooks;
