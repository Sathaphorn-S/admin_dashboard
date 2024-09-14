import React from "react";

const BackgroundVideo: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
