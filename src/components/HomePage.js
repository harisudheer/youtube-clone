import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [videos, setVideos] = useState([]);
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: apiKey,
                        part: 'snippet',
                        q: 'cats', // default search query
                        type: 'video',
                    },
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, [apiKey]);

    return (
        <div>
            {/* Video thumbnails */}
            {videos.map(video => (
                <div key={video.id.videoId}>
                    <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    <h3>{video.snippet.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default HomePage;
