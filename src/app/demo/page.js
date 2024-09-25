"use client";
import React from "react";
import Image from "next/image";

const VideoPlayer = () => {
  const recommendedVideos = [
    {
      id: 1,
      title: "Recommended Video 1",
      thumbnail: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      title: "Recommended Video 2",
      thumbnail: "https://picsum.photos/101/101",
    },
    {
      id: 3,
      title: "Recommended Video 3",
      thumbnail: "https://picsum.photos/101/101",
    },
    {
      id: 4,
      title: "Recommended Video 4",
      thumbnail: "https://picsum.photos/101/102",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Video Player */}
      <div className="w-full aspect-video bg-black mb-4">
        <video
          controls
          className="w-full h-full object-cover"
          src="https://youtu.be/6DP7cMN99zQ?si=ZN60bIWgig4yie93"
        />
      </div>

      {/* Recommended Videos */}
      <h2 className="text-xl font-semibold mb-4">Recommended Videos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendedVideos.map((video) => (
          <div key={video.id} className="flex flex-col items-center">
            <Image
            width={100}
            height={48}
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p className="text-center">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
