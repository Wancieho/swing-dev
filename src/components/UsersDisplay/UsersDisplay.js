import { useEffect } from "react";

const UsersDisplay = (props) => {
  useEffect(() => console.log("UsersDisplay", props), [props]);

  return <div data-testid="UsersDisplay">UsersDisplay Component</div>;
};

export default UsersDisplay;
