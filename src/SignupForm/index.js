import React from 'react'
import "./style.css"

export default function SignupForm(props) {
    return (
        <form onSubmit={props.submit} className="SignupForm">
            <input onChange={props.change} name="username" value={props.signupState.username} placeholder="username"></input>
            <input onChange={props.change} name="password" value={props.signupState.password} placeholder="password" type="password"></input>
            <button>Signup</button>
        </form>
    )
}
