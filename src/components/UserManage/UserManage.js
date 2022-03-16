import { useState } from "react";

import UserForm from "../UserForm/UserForm";
import UsersDisplay from "../UsersDisplay/UsersDisplay";

const UserManage = () => {
  const [user, setUser] = useState();

  return (
    <div data-testid="UserManage">
      <UserForm setUser={setUser} />
      <UsersDisplay user={user} />
    </div>
  );
};

export default UserManage;
