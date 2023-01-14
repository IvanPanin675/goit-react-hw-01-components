import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";

import user from "components/data/user.json";
import data from "components/data/data.json";


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        stats={data}
        title='Upload stats'
      />
    </>
  );
};
