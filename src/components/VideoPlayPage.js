VideoPlayPage.js
import React from 'react';

const VideoPlayPage = () => {
    return (
        <div>
            {/* Embedded YouTube player */}
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video player"
                allowFullScreen
            ></iframe>
            {/* Related videos */}
            <div>Related Videos</div>
        </div>
    );
};

export default VideoPlayPage;
