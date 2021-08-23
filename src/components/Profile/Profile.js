import PropTypes from 'prop-types';
import notAvatar from './not_avatar.jpg';
import s from './Profile.module.css'

export default function Profile({
    avatar = notAvatar,
    name,
    tag,
    location,
    followers,
    views,
    likes }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
    <img
      src={avatar}
      alt={name}
          className={s.avatar}
      width="64"
    />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
  

      <ul className={s.stats}>
      <li className={s.item}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes</span>
            <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  </div>
</div>

  );
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
}