import { useState } from "react";

import { CredentialsForm } from "../../ui/CredentialsForm/CredentialsForm";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { useAuth } from "../../context/authContext";

const Signup = () => {
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    email: null,
    password: null,
    name: null,
    phone: null,
    address: null,
  });

  const { email, password, name, phone, address } = formData;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    signup(formData);
  }

  return (
    <CredentialsForm onSubmit={handleSubmit}>
      <div>
        <Input
          name="email"
          type="email"
          label="Email address"
          value={email}
          onChange={handleChange}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={handleChange}
        />
        <Input name="name" label="Name" value={name} onChange={handleChange} />
        <Input
          name="address"
          label="Address"
          value={address}
          onChange={handleChange}
        />
        <Input
          name="phone"
          type="number"
          label="Phone"
          value={phone}
          onChange={handleChange}
        />
      </div>
      <Button type="primary" size="lg" isFullWidth rounded>
        Sign-up
      </Button>
    </CredentialsForm>
  );
};

export default Signup;
