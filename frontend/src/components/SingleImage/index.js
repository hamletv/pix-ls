import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleImage } from "../../store/imagesReducer";
import UpdateImage from "../UpdateImage";
import LoginForm from "../LoginFormModal/LoginForm";
import { Modal } from "../../context/Modal";

const SingleImage = () => {
    const [showModal, setShowModal] = useState(false);
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singleImage = useSelector(state => state.imageState.entries[id]);
    // console.log('Single Image', singleImage.id);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleImage(id))
    }, [dispatch]);

    return (
      <>
        <div>
          <h1>{singleImage?.description}</h1>
          <img src={singleImage?.imageUrl} alt={singleImage?.description} />
        </div>
        <div>
          <ul>
            <li>
              <button className="function-button">
                <a href={`${singleImage.id}/edit`}>Edit</a>
              </button>
            </li>
            <li>
              <button className="function-button">
                <a href={`/images`}>Cancel</a>
              </button>
            </li>
          </ul>
        </div>
      </>
      );
};

export default SingleImage;
