import { useEffect, useState } from "react";

const UsersDisplay = ({ user }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => user && setUsers((prev) => [...prev, user]), [user]);

  return (
    <div data-testid="UsersDisplay">
      {users.length > 0 && (
        <table data-testid="UsersDisplay">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice(0)
              .reverse()
              .map((user, i) => (
                <tr key={JSON.stringify(user + i)}>
                  <td>{user?.firstName}</td>
                  <td>{user?.lastName}</td>
                  <td>{user?.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
      {users.length === 0 && <p>No users found</p>}
    </div>
  );
};

export default UsersDisplay;
