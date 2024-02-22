import { useState } from 'react';
import { PrivateApi } from '../api';

const useProfile = () => {
  const [profile, setProfile] = useState();

  const fetchProfile = async (currentUser) => {
    try {
      const { status, data } = await PrivateApi.get(
        `/profile/${currentUser.email}`
      );
      if (status === 200) {
        setProfile(data);
        return data;
      }
    } catch (error) {
      throw error;
    }
  };

  return { profile, fetchProfile };
};

export default useProfile;
