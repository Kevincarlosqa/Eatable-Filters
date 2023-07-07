import { useState } from "react"

import { CredentialsForm } from "../../ui/CredentialsForm/CredentialsForm"
import Input from "../../ui/Input/Input"
import Button from "../../ui/Button/Button"


const Login = () => {

  const [formData, setFormData] = useState({
    email: null,
    password: null,
  })

  return (
    <CredentialsForm>
      <div>
        <Input type="email" label="Email address"/>
        <Input type="password" label="Password" />
      </div>
      <Button type="primary" size="lg" isFullWidth rounded>Log in</Button>
    </CredentialsForm>)
}

export default Login
