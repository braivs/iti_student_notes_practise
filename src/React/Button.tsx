import React from 'react'

//onClick (Native JS)
// select button with what we work
const button = document.querySelector('#button')
// We assign to event 'click' handler, those the fuction,
// we will be call, as the event will be.
button && button.addEventListener('click', () => console.log('I am button'))

// onClick (React)
export function Button() {
    return(
        <button onClick={() => console.log('I am button')}>Button</button>
    )
}
