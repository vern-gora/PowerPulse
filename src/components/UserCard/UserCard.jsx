import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import sprite from '../../images/svg/sprite.svg';
import { updateAvatar } from 'redux/auth/operations';
import css from './UserCard.module.css';

const UserCard = () => {
  const dispatch = useDispatch;
  const user = useSelector(selectUser);
  const [avatar, setAvatar] = useState(user.avatarURL);

  const avatarUser = (
    <img className={css.photo} src={avatar} width="100%" alt="Avatar" />
  );
  const avatarLogo = (
    <svg className={css.svg_logo_user} fill="#efede84d" width="62" height="62">
      <use href={`${sprite}#avatar_icon`}></use>
    </svg>
  );

  const handleAvatatChange = event => {
    const file = event.target.files[0];

    if (file) {
      const blob = new Blob([file]);
      const objectURL = URL.createObjectURL(blob);
      setAvatar(objectURL);
    }

    try {
      dispatch(updateAvatar(file));
      console.log(file);
    } catch (error) {
      console.log('Помилка при відправленні файлу на сервер', error);
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.avatar}>{avatar ? avatarUser : avatarLogo}</div>
      <form id="upload-form">
        <input
          type="file
        "
          id="file-input"
          name="file
                  "
          style={{ display: 'none' }}
          onChange={handleAvatatChange}
        />
        <label htmlFor="file-input">
          <div className={css.button}>
            <svg className={css.icon_btn}>
              <use href={`${sprite}#check_mark_icon`}></use>
            </svg>
          </div>
        </label>
      </form>
      <p className={css.title_name}>{user.name}</p>
      <p className={css.subtitle}>User</p>
    </div>
  );
};

export default UserCard;
