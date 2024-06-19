import React, { useState, useEffect } from 'react'
import { YT_CHANNEL_UPLOADS } from '../utils/constants';

const YouTube = () => {
    const[uploadData ,setUploadData] = useState();

    useEffect(()=>{
        const fetchData = async () => {
            try{
            const data = await fetch(YT_CHANNEL_UPLOADS + process.env.YOUTUBE_API_KEY)
            const json = await data.json();
            setUploadData(json);
            console.log(uploadData);
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[])

    if(uploadData == undefined){
        <h1>Loading...</h1>
    }else{
        const {items} = uploadData;
        return(
            <div className='flex flex-wrap justify-center  dark:bg-black'>
                {items.map((video)=> (
                    <div key={video.id.videoId} className='p-4 m-4 border-black rounded-md  dark:bg-black'>
                        <img src={video.snippet?.thumbnails?.medium?.url} className='rounded-md'></img>
                        <h3 className='truncate  dark:bg-black'>
                            <span className="  dark:bg-black block overflow-hidden truncate-lines-2 whitespace-nowrap text-ellipsis max-w-xs">{video.snippet?.title}</span>
                        </h3>
                        {/* <h1>{video.snippet?.description}</h1> */}
                    </div>
                )
                )}
            </div>
          )
    }
}

export default YouTube;