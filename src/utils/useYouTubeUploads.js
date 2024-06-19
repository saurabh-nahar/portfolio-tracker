import { useState, useEffect } from 'react'
import { YT_CHANNEL_UPLOADS } from './constants';

const useYouTubeUploads = () => {

    const [uploadData, setUploadData] = useState(null);

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
    if(uploadData != null){
        return uploadData;
    }
}

export default useYouTubeUploads;