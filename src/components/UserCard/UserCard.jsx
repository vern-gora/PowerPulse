import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import sprite from '../../images/svg/sprite.svg';
import { updateAvatar } from 'redux/auth/operations';
import css from './UserCard.module.css';
import { nanoid } from 'nanoid';

const UserCard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const imageId = nanoid();

  const handleAvatarChange = (event) => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0], imageId);
    dispatch(updateAvatar(formData));
  };
  return (
    <div className={css.main_wrapper}>
      <div className={css.wrap_avatar}>
        {user.avatarUrl ? 
          <img src={user.avatarUrl} alt="Avatar" className={css.avatar}/>: 
          <svg className={css.avatar_svg}>
            <use href={sprite + '#avatar_icon'}></use>
          </svg>
        }
      </div>
      <form id="upload-form">
        <input
          type="file"
          id="file-input"
          name="file"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
        <label htmlFor="file-input">
          <div className={css.button}>
            <svg className={css.icon_btn}>
              <use href={`${sprite}#check_mark_icon`}></use>
            </svg>
          </div>
        </label>
      </form>
      <p className={css.title_name}>{user.name ? user.name : 'User'}</p>
      <p className={css.subtitle}>User</p>
    </div>
  );
};

export default UserCard;