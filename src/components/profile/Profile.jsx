import css from "./Profile.module.css";

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img src={image} alt={name} className={css.card} />
        <p className={css.title}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.stat}>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.stat}>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
