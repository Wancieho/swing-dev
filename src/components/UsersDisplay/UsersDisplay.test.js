import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsersDisplay from './UsersDisplay';

describe('<UsersDisplay />', () => {
  test('it should mount', () => {
    render(<UsersDisplay />);
    
    const usersDisplay = screen.getByTestId('UsersDisplay');

    expect(usersDisplay).toBeInTheDocument();
  });
});