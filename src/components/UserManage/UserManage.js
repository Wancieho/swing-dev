import UserForm from '../UserForm/UserForm';
import UsersDisplay from '../UsersDisplay/UsersDisplay';

const UserManage = () => (
  <div data-testid="UserManage">
    <UserForm />
    <UsersDisplay />
  </div>
);

export default UserManage;
