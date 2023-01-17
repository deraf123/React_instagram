import { useState } from "react";
import { Comment } from "../Comment";
import UserBadge from "../UserBadge";

import "./style.css";

export const DetailedCard = ({
  userName,
  avatarUrl,
  userId,
  imgUrl,
  likes,
  isLikedByYou,
  comments,
}) => {
  const [isCommentShow, setIsCommentShow] = useState(false);

  const renderComments = () => {
    if (comments.length > 2 && !isCommentShow) {
      const commentCopy = [...comments];
      const commentForRender = commentCopy.splice(comments.length - 2, 2);
      return (
        <>
          <span className="cnDetailedCardCommentTitle" onClick={() => setIsCommentShow(true)}>{`Показать еще ${
            comments.length - commentForRender.length
          } коментариев `}</span>
          {commentForRender?.map((comment) => (
            <Comment {...comment} />
          ))}
        </>
      );
    }
    return comments?.map((comment) => <Comment {...comment} />);
  };
  return (
    <div className='cnDetailCardRoot'>
      <div className='cnDetailCardHeader'>
        <UserBadge nickName={userName} avatarUrl={avatarUrl} id={userId} />
      </div>
      <div>
        <img src={imgUrl} alt='img' className='cnDetailCardImg' />
      </div>
      <div className='cnDetailCardButtons'>
        <i
          className={`${
            isLikedByYou ? "fas" : "far"
          } fa-heart cnDetailCardIconLike`}
        />
        <i className='fas fa-comment cnDetailCardIconComment' />
      </div>
      <div className='cnDetailCardLikes'>{`Оценили ${likes} человек`}</div>
      <div className='cnDetailCardComments'>{renderComments()}</div>
      <textarea className='cnDetailCardArea'></textarea>
    </div>
  );
};
