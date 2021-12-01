import React from 'react'
import "./style.css"

export default function LoginForm(props) {
    return (
        <form onSubmit={props.submit} className="LoginForm">
            <input onChange={props.change} name="username" value={props.loginState.username} placeholder="username"></input>
            <input onChange={props.change} name="password" value={props.loginState.password} placeholder="password" type="password"></input>
            <button>Login</button>
        </form>
    )
}
