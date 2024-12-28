import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="box">
          <article className="media">
            <figure className="media-left">
              <p className="image is-64x64">
                <img 
                  src={comment.avatar} 
                  alt={`${comment.name}'s avatar`} 
                  className="is-rounded comment-avatar" 
                />
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{comment.name}</strong> <small>{comment.username}</small>
                  <br />
                  {comment.text}
                </p>
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-reply"></i>
                    </span>
                    Reply
                  </a>
                  <a className="level-item">
                    <span className="icon is-small">
                      <i className="fas fa-heart"></i>
                    </span>
                    Like
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default CommentList;