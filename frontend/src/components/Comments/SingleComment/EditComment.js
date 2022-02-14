import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from "../../../store/commentsReducer";
import { useHistory, useParams } from "react-router-dom";


const EditComment = ({ comment, commentId, userId }) => {
    const dispatch = useDispatch();
    const { id } = useParams()

    const [updatedComment, setUpdateComment] = useState(comment);
    const [open, showForm] = useState(false);
    const history = useHistory();

    // const reset = () => {
    //     setComment('');
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = { comment: updatedComment, imageId: id , userId, id: commentId };
        const response = await dispatch(updateComment(comment));
        if(response){showForm(!open)}
        // history.push(`/images/${image.id}`)
    };

    const toggleForm = (e) => {
        e.preventDefault();
        showForm(!open);
    }

    const handleCancel = (e) => {
        e.preventDefault();
        // history.push(`/images/${imageId}`);
    };

    return (
        <div>
            <div>
                <button onClick={toggleForm}>Edit</button>
            </div>

            {open && (
            <div>

            <h1>Edit your comment</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="textarea"
                onChange={(e) => setUpdateComment(e.target.value)}
                // value={comment}
                // placeholder="Add your comment here"
                name="comment"
                />
                <div>
                    <button type="submit" onClick={handleSubmit}>Edit comment</button>
                    <button type="submit" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
            </div>
            )}
        </div>
    );
};


export default EditComment;
