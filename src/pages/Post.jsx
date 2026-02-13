import { Outlet } from "react-router-dom";
const Post = () => {
    return (
        <>
            <h3>這是Post頁面</h3>
            <Outlet />
            
        </>
    );
};

export default Post; 