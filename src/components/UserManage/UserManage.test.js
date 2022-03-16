import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserManage from './UserManage';

describe('<UserManage />', () => {
  test('it should mount', () => {
    render(<UserManage />);
    
    const userManage = screen.getByTestId('UserManage');

    expect(userManage).toBeInTheDocument();
  });
});