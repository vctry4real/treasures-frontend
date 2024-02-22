import { useSelector } from 'react-redux';

const useUser = () => {
  const currentUserRedux = useSelector((state) => state.user);
  const currentUserLocalStorage = JSON.parse(
    localStorage.getItem('user') ?? 'null'
  );

  const currentUser = currentUserRedux || currentUserLocalStorage;

  return currentUser;
};

export default useUser;
