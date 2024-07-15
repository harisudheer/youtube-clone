import React from 'react';

const VideoPlayPage = () => {
    return (
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                allowFullScreen
            ></iframe>
            <div>Related Videos</div>
        </div>
    );
};

export default VideoPlayPage;
