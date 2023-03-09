import useUser from '@/hooks/useUser';
import { ReactElement } from 'react';

const App = (): ReactElement => {
  const { isVerified, user, handleClick } = useUser();

  return (
    <>
      <h1 className='text-xs text-indigo-500 hover:bg-red-600 hover:text-white'>Hello world</h1>
      {isVerified &&
        <h2>Verified</h2>
      }
      {JSON.stringify(user)}
      <h4>Username: { }</h4>
      <button onClick={handleClick}>Toggle</button>
    </>
  );
};

export default App;