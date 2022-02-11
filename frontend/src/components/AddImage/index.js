import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../store/imagesReducer";
// import './AddImage.css';

const AddImage = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const userId = useSelector(state => state.session.user.id);

    const reset = () => {
        setDescription('');
        setImageUrl('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newImage = {
            description,
            imageUrl,
            userId,
            // albumId
        };
        dispatch(addImage(newImage));
        reset();
    };

    return (
        <div >
            <h1>Add your image</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Description"
                name="description"
                />
                <input
                type="text"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                placeholder="Image URL"
                name="imageUrl"
                />
                <button type="submit">Add photo</button>
            </form>
        </div>
    );
};


export default AddImage;
