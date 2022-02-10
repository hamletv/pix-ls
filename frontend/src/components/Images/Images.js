import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImageAC, getImages } from "../../store/images";
import { NavLink } from "react-router-dom";

const AllImages = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => Object.values(state.image.images));
    console.log(images)

    useEffect(() => {
        dispatch(getImageAC())
    }, [dispatch])
    return (
        <>
            <h1>Images</h1>
            <div>
                {images?.map(({ id, imageUrl, description }) => (
                    <div>
                        <NavLink key={id} to={`/images/${id}`}>
                            {description}
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    )
};

export default AllImages;
