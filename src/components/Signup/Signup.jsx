import { useState } from "react";

import { CredentialsForm } from "../../ui/CredentialsForm/CredentialsForm";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";

const Signup = () => {

  const [formData, setFormData] = useState({
    email: null,
    password: null,
    name: null,
    last_name: null,
  })

  return (
    <CredentialsForm>
      <div>
        <Input label="Email address" />
        <Input type="password" label="Password" />
        <Input label="Name" />
        <Input label="Lastname" />
      </div>
      <Button type="primary" size="lg" isFullWidth rounded>Sign-up</Button>
    </CredentialsForm>
  );
};

export default Signup;
