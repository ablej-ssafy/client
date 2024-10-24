import './page.css';

import {useState} from 'react';

import {Header} from './Header';

type User = {
  name: string;
};

export const Page = () => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({name: 'Jane Doe'})}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({name: 'Jane Doe'})}
      />
    </article>
  );
};
