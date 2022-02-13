import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../store/imagesReducer";
import { useHistory } from "react-router-dom";
import './AddImage.css';

const AddImage = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();

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
        };
        dispatch(addImage(newImage));
        reset();
        history.push('/images');
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/images');
    };

    return (
        <>
        <div className="headline-container">
            <h1>- Add your image -</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit} className="form-style">
                <ul>
                    <li>
                        <input
                        type="textarea"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        placeholder="Description"
                        name="description"
                        className="field-style field-full align-none"
                        />
                    </li>
                    <li>
                        <input
                        type="text"
                        onChange={(e) => setImageUrl(e.target.value)}
                        value={imageUrl}
                        placeholder="Image URL"
                        name="imageUrl"
                        className="field-style field-full align-none"
                        />
                    </li>
                </ul>
                <div>
                    <button type="submit">Add photo</button>
                    <button type="submit" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
        </>
    );
};


export default AddImage;
