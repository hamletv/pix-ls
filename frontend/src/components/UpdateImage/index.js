import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeImage, updateImage } from "../../store/imagesReducer";
// import './EditImage.css';


const UpdateImage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const images = useSelector((state) => Object.values(state.image.images[id]));
    const history = useHistory();
    const [description, setDescription] = useState(images?.description);
    const [imageUrl, setImageUrl] = useState(images?.imageUrl);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = { description, imageUrl };

        await dispatch(updateImage(image));
        history.push('/images')
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeImage())
        return history.push('/images');
    };

    return (
        <div >
            <h1>Edit your image</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                name="description"
                />
                <input
                type="text"
                required
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                placeholder="Image URL"
                name="imageUrl"
                />
                <button type="submit" onClick={handleSubmit}>Edit photo</button>
                <button type="submit" onClick={handleDelete}>Delete photo</button>
            </form>
        </div>
    );
};


export default UpdateImage;
