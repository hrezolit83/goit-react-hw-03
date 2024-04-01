import "./App.css";
import Profile from "../profile/Profile.jsx";
import FriendList from "../friend-list/FriendList.jsx";
import userData from "../../data/userData.json";
import friendData from "../../data/friendData.json";
import transaction from "../../data/transaction.json";
import TransactionHistory from "../transaction-history/TransactionHistory.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendData} />
      <TransactionHistory items={transaction} />
    </>
  );
};

export default App;
