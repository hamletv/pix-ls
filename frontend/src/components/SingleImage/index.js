import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleImage } from "../../store/imagesReducer";
import UpdateImage from "../UpdateImage";

const SingleImage = () => {
    const { id } = useParams();
    const user = useSelector(state => state.session.user);
    const singleImage = useSelector(state => state.imageState.entries[id]);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSingleImage(id))
    }, [dispatch]);

    return (
        <div>
          <h1>{singleImage?.description}</h1>
          <img src={singleImage?.imageUrl} alt={singleImage?.description} />
        </div>
      );
};

export default SingleImage;
