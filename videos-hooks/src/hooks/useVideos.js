import Youtube from '../apis/Youtube';
import { useEffect, useState } from 'react';

const useVideos = (defaultSearchTerm) => {
    const [videos , setVideos] = useState([])

    useEffect(() => {
        search(defaultSearchTerm)
    } , [defaultSearchTerm])


    
    const search = async (term) => {
        const { data } = await Youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(data.items)


    
    }
    return [videos , search]
}


export default useVideos