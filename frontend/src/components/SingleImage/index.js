import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import { getSingleImage } from "../../store/imagesReducer";
import { getComments, removeComment, updateComment } from "../../store/commentsReducer";
import WriteComment from '../Comments/SingleComment/index'
import './SingleImage.css'

const SingleImage = () => {
    const [loadComment, setLoadComment] = useState(false);
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singleImage = useSelector(state => state.imageState.entries[id]);
    const comments = useSelector(state => state.commentState.entries);
    const commentArray = Object.values(comments);
    // const [commentMsg, setCommentMsg] = useState(comments?.comment || '');
    // console.log('The comments', commentArray);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleImage(id))
      dispatch(getComments(id))
    }, [dispatch]);

    const openComment = (e) => {
      e.preventDefault();
      setLoadComment(!loadComment);
    }

    const editComment = async (e) => {
      e.preventDefault();
      // const editedComment = { comment, }
      // await dispatch(updateComment(comment));
      // history.push(`/images/${comment.id}`);
    }

    const deleteComment = (e, id) => {
      e.preventDefault();
      dispatch(removeComment(id))
    }

    return (
      <>
        <div className="headline">
          <h1>- {singleImage?.description} -</h1>
        </div>
        <div className="image-container">
          <img src={singleImage?.imageUrl} alt={singleImage?.description} />
        </div>
        <div>
          <ul>
            <li>
              {user.id === singleImage.userId &&
              (<button className="function-button" onClick={(e) => history.push(`${singleImage?.id}/edit`)}>Edit
              </button>)
              }
            </li>
            <li>
              <button onClick={(e) => history.push('/images')}className="function-button">
                Cancel
              </button>

            </li>

          </ul>
          <div>

          </div>
          {user && (<div>
              <button className="function-button" onClick={openComment}>Add Comment
              </button>
          </div>)}
          {loadComment && (<WriteComment imageId={singleImage?.id} />)}
        </div>
        <div>
          {commentArray?.map(({ comment, id, userId }) => (
            <div>
              <p key={id}>{comment}</p>
              {(user.id === userId) && (<button className="function-button" onClick={editComment}>Edit
              </button>)}
              {(user.id === userId) && (<button className="function-button" onClick={(e) => deleteComment(e, id)}>Delete
              </button>)}
            </div>
              ))}
        </div>
      </>
      );
};

export default SingleImage;
