import { useState } from "react"

import { CredentialsForm } from "../../ui/CredentialsForm/CredentialsForm"
import { useAuth } from "../../context/authContext"
import Input from "../../ui/Input/Input"
import Button from "../../ui/Button/Button"

const Login = () => {
  const {login} = useAuth()

  const [formData, setFormData] = useState({
    email: 'crhis@mail.com',
    password: 'letmein',
  })

  const { email, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(formData);
  }

  return (
    <CredentialsForm onSubmit={handleSubmit}>
      <div>
        <Input type="email" name="email" label="Email address" value={email} onChange={handleChange} />
        <Input type="password" name="password" label="Password" value={password} onChange={handleChange} />
      </div>
      <Button type="primary" size="lg" isFullWidth rounded>Log in</Button>
    </CredentialsForm>)
}

export default Login
