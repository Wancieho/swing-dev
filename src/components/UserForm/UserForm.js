import { useRef } from "react";
import styled from "styled-components";

const Label = styled.label`
  > * {
    display: block;
  }
`;

const UserForm = ({ setUser }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const validate = () => {
    if (
      firstNameRef.current.value &&
      lastNameRef.current.value &&
      emailRef.current.value
    ) {
      setUser({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
      });

      firstNameRef.current.value = null;
      lastNameRef.current.value = null;
      emailRef.current.value = null;
    }
  };

  return (
    <form data-testid="UserForm" onSubmit={(e) => e.preventDefault()}>
      <Label>
        Name
        <input type="text" ref={firstNameRef} required />
      </Label>
      <br />
      <Label>
        Surname
        <input type="text" ref={lastNameRef} required />
      </Label>
      <br />
      <Label>
        Email Address
        <input type="email" ref={emailRef} required />
      </Label>
      <br />
      <button onClick={() => validate()}>Add User</button>
    </form>
  );
};

export default UserForm;
