import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateImage } from "../../store/imagesReducer";
// import './EditImage.css';


const UpdateImage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const images = useSelector((state) => Object.values(state.image.images[id]));
    const history = useHistory();
    const [description, setDescription] = useState(images?.description);
    const [imageUrl, setImageUrl] = useState(images?.imageUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        const image = {
            description,
            imageUrl
        };

        let updatedImage = dispatch(updateImage(image, id));
        if(updatedImage) history.push('/images')
    };

    const cancelUpdate = (e) => {
        e.preventDefault();
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
                <button type="submit" onClick={cancelUpdate}>Cancel edit</button>
            </form>
        </div>
    );
};


export default UpdateImage;
