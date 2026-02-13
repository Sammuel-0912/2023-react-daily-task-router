import { useParams } from "react-router-dom";


const PostId = () => {
    let params = useParams();
    return (
        <>
            <p>PostId: {params.postId}</p>
        
        </>
    )
}

export default PostId; 