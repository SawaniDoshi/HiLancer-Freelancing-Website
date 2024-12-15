


import React from 'react';
import './fetch.css'; // Import the CSS file
const Card = ({ getMachine }) => {
  const title = getMachine.snippet.title || 'No Title Available';
  const description = getMachine.snippet.description || 'No Description Available';
  const thumbnailUrl = getMachine.snippet.thumbnails?.default?.url || 'path/to/default_image.jpg'; // Access thumbnail URL
  const playlistId = getMachine.id;
  const youtubeUrl = `https://www.youtube.com/playlist?list=${playlistId}`;
  const channelName = getMachine.snippet.channelTitle || 'Unknown Channel'; // Access channel title from getMachine

  return (
    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
      <div className="card"> {/* Apply card class */}
        <img 
          src={thumbnailUrl} 
          alt={title} 
          onError={(e) => { e.target.src = 'path/to/default_image.jpg'; }} // Fallback for missing image
        />
        <h3>{title}</h3>
        <p className="channel-name">Channel: {channelName}</p> {/* Display channel name */}
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
