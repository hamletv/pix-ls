import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeImage, getImages, updateImage } from "../../store/imagesReducer";
// import './EditImage.css';


const UpdateImage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const imagesObj = useSelector((state) => state.imageState.entries);
    const images = imagesObj[id];
    // console.log(images);
    const history = useHistory();
    const [description, setDescription] = useState(images?.description || '');
    const [imageUrl, setImageUrl] = useState(images?.imageUrl || '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const image = { description, imageUrl, id };

        await dispatch(updateImage(image));
        history.push(`/images/${image.id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeImage(id))
        return history.push('/images');
    };

    const handleCancel = async (e) => {
        e.preventDefault();
        return history.push(`/images/${images.id}`);
    };

    useEffect(() => {
        if(images) {
            setDescription(images.description)
            setImageUrl(images.imageUrl);
        }
    }, [imagesObj]);

    useEffect(() => {
        dispatch(getImages())
    }, [dispatch]);

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
                <button type="submit" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
};


export default UpdateImage;
