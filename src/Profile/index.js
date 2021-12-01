import React from 'react'
import "./style.css"

export default function Profile(props) {
    return (
        <>
        <h1 className="Profile">This is your profile form</h1>
        <h2>Your high score is 20 hardcoded right now</h2>
        <h3 highscore={props.highscore} value={props.highscore.highscore}>High Score:</h3>

        </>
    )
}