import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../store/commentsReducer";
import { useHistory } from "react-router-dom";


const WriteComment = ({ imageId }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const userId = useSelector(state => state.session.user.id);
    const history = useHistory();

    const reset = () => {
        setComment('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            comment,
            imageId,
            userId,
        };
        dispatch(addComment(newComment));
        reset();
        history.push(`/images/${imageId}`);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push(`/images/${imageId}`);
    };

    return (
        <div >
            <h1>Add your comment</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="textarea"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Add your comment here"
                name="comment"
                />
                {/* <input
                type="text"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                placeholder="Image URL"
                name="imageUrl"
                /> */}
                <div>
                    <button type="submit">Add comment</button>
                    <button type="submit" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};


export default WriteComment;
