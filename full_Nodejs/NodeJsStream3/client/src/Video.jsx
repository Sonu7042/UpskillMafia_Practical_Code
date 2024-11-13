import React from "react";

const Video = () => {
  return (
    <div>
      <h1>Video Streaming Test</h1>
      <video controls>
        <source src="http://localhost:9000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
