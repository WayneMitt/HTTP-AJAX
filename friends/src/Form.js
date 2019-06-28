import React from "react"
import axios from "axios"

class Form extends React.Component {
    constructor() {
		super()
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = (evt) => {
		this.setState({
			[evt.target.name]: evt.target.value
		})
    }
    
    createFriend = (evt) => {
        evt.preventDefault()
        
        const { name, age, email } = this.state
        const payload = { name, age, email }

        axios.post('http://localhost:5000/friends', payload)
            .then((res => {
                this.props.updateFriends(res.data)
                this.props.history.push("/friends")
            }))
            .catch((err => {
                console.log(err)
            })) 
    }

    render () {
        const { name, age, email } = this.state

        return (
            <form onSubmit={this.createFriend}>
				<h1>Create New Friend</h1>

                <input type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
				<input type="number" name="age" placeholder="Age" value={age} onChange={this.handleChange} />
				<input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} />

				<button type="submit">Create</button>
			</form>
        )
    }
}

export default Form