import React, { useState } from 'react';
import useToggle from './useToggle';

const Toggler = () => {

    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isInLove, toggleisInLove] = useToggle(true)
    const [isBanana, toggleIsBanana] = useToggle(true)


    return (
        <div>
            <h1 onClick={() => toggleIsHappy()}>{isHappy ? "😁" : "😥"}</h1>
            <h1 onClick={() => toggleisInLove()}>{isInLove ? "❤️" : "💔"}</h1>
            <h1 onClick={() => toggleIsBanana()}>{isBanana ? "🍌" : "🍎"}</h1>
        </div>
    )
}

export default Toggler;
