import React from 'react'

const Login = () => {
  const [username, setUsername] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username)
  }

  return (
  <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </label>
      {/* <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <input type="submit" value="Submit" /> */}
    </form>
  </div>)
}

export default Login;