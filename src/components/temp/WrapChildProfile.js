import { useState } from 'react';

import ChildProfile from './ChildProfile';
import { ChildProfileContext } from '../../context/Context';

const user = {
  isSubscribed: false, // or true depending on your requirement
  name: 'John Doe',
};

const DemoProps = {};

function Demo({}) {
  const [user] = useState({
    isSubscribed: true,
    name: 'You',
  });

  return (
    <div>
      <ChildProfileContext.Provider>
        <ChildProfile user={user} />
      </ChildProfileContext.Provider>
    </div>
  );
}
