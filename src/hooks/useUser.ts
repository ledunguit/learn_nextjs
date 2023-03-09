import { getIsVerified, getUser, setUser, setVerified } from '@/stores/modules/authModule';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useUser = () => {
  const isVerified = useSelector(getIsVerified);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({
      name: 'Le Dung',
      age: 23
    }));
  }, []);

  const handleClick = () => {
    dispatch(setVerified(!isVerified));
    dispatch(setUser({
      name: 'Hello',
      age: 99
    }));
  };

  return { user, isVerified, handleClick };
};

export default useUser;