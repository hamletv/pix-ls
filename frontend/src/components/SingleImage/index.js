import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleImage = () => {
    const { id } = useParams();
    const singleImage = useSelector(state => state.imageState.entries[id]);

    return (
        <div>
          <h1>{singleImage?.description}</h1>
          <img src={singleImage?.imageUrl} alt={singleImage?.description} />
        </div>
      );
};

export default SingleImage;
