import { useParams } from "react-router-dom";
function User() {
    const { userid } = useParams()
    return (
        <div className='text-center bg-neutral-950 text-white py-10 text-3xl'>
            User:  {userid}
        </div>
    );
}

export default User;
