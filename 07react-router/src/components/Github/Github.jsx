import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData([...data])
    //         })

    // }, [])

    return (
        <div className='flex flex-1 justify-center items-center flex-wrap 
            gap-5 mt-2'
        >
            {
                data.map((item, index) => (
                    <div key={index}
                        className='h-[100%] w-[10%] rounded-lg shadow-md 
                        hover:shadow-xl hover:shadow-slate-800'
                    >
                        <img 
                            alt="avatar"
                            height={150}
                            width={150}
                            src={item.avatar_url}
                        />
                        <p>{item.login}</p>
                    </div>
                    
                ))
            }
        </div>
    );
}

export default Github;

export const gitHubDataLoader = async () => {
    const response = await fetch('https://api.github.com/users')
    return response.json()
}
