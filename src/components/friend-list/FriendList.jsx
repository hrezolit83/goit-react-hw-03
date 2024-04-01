import css from "./FriendList.module.css";
import FriendListItem from "../friend-list-item/FriendListItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <>
      <h1>Friends</h1>
      <ul className={css.friends}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={css.friend}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FriendList;
