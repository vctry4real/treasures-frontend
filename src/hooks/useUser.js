import { useSelector } from 'react-redux';

const useUser = () => {
  const currentUserRedux = useSelector((state) => state.user);
  const currentUserLocalStorage = JSON.parse(localStorage.getItem('user'));

  const currentUser = currentUserRedux || currentUserLocalStorage;

  console.log('currentUser ', currentUser);

  return currentUser;
};

export default useUser;
