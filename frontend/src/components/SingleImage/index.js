import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Route, useHistory, useParams } from "react-router-dom";
import { getSingleImage } from "../../store/imagesReducer";
import UpdateImage from "../UpdateImage";
import LoginForm from "../LoginFormModal/LoginForm";
// import { Modal } from "../../context/Modal";
import WriteComment from '../Comments/SingleComment/index'
import './SingleImage.css'

const SingleImage = () => {
    const [showModal, setShowModal] = useState(false);
    const [addComment, setAddComment] = useState(false);
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singleImage = useSelector(state => state.imageState.entries[id]);
    // console.log('Single Image', singleImage.id);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleImage(id))
    }, [dispatch]);

    const openComment = (e) => {
      e.preventDefault();
      setAddComment(!addComment);
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
          {user && (<div>
              <button className="function-button" onClick={openComment}>Add Comment
              </button>
          </div>)}
          {addComment && (<WriteComment imageId={singleImage?.id} />)}
        </div>
      </>
      );
};

export default SingleImage;
