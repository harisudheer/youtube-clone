import React from 'react';

const VideoThumbnail = ({ video }) => {
    return (
        <div>
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </div>
    );
};

export default VideoThumbnail;
