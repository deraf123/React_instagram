import { useNavigate } from "react-router-dom";
import "./style.css";
const UserBadge = ({ nickName, avatarUrl, id }) => {
  const navigate = useNavigate();

  const onUserPageClick = () => {
    navigate(`/$${id}`);
  };
  return (
    <div className='cnUserBadgeRoot' onClick={onUserPageClick}>
      {avatarUrl ? (
        <img src={avatarUrl} alt='logo' className='cnUserBadgeAvatar' />
      ) : (
        <div className='cnUserBadgePlaceholder'></div>
      )}
      <span className='cnUserBadgeName'>{nickName}</span>
    </div>
  );
};
export default UserBadge;
