import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import { getSingleImage } from "../../store/imagesReducer";
import { getComments } from "../../store/commentsReducer";
// import UpdateImage from "../UpdateImage";
// import LoginForm from "../LoginFormModal/LoginForm";
// import { Modal } from "../../context/Modal";
import WriteComment from '../Comments/SingleComment/index'
import './SingleImage.css'

const SingleImage = () => {
    // const [showModal, setShowModal] = useState(false);
    const [loadComment, setLoadComment] = useState(false);
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singleImage = useSelector(state => state.imageState.entries[id]);
    const comments = useSelector(state => state.commentState.entries);
    const commentArray = Object.values(comments);
    // const filteredComments = commentArray.filter(({ imageId }) => imageId === id);
    console.log('The comments', commentArray);
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

    const editComment = (e) => {
      e.preventDefault();
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
              <button className="function-button" onClick={(e) => history.push(`${singleImage?.id}/edit`)}>Edit
              </button>
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
              {(user.id === userId) && (<button className="function-button" onClick={editComment}>Delete
              </button>)}
            </div>
              ))}
        </div>
      </>
      );
};

export default SingleImage;
