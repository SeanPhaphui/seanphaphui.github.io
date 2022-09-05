import React from "react";
import imgPlay from "./../../.resources/playButton.jpg";
import "./ContentCard.css";

export interface ContentCardProps {
  url: string;
  title: string;
  thumbnail: string;
  time: string;
}

export const ContentCard: React.FC<ContentCardProps> = (props) => {
  const { url, title, thumbnail, time } = props;

  return (
    <div
      className="content-card-item"
      onClick={() => {
        window.open(url);
      }}
    >
      <div className="content-card-item-header">
        {title}
      </div>
      <div className="content-card-item-content">
        <div className="content-card-item-content-image">
          <div className="content-card-item-content-image-overlay">
            <img
              className="content-card-item-content-image-overlay-child"
              src={imgPlay}
            />
          </div>
          <img
            className="content-card-item-content-image-thumbnail"
            src={thumbnail}
          />
        </div>
        <div className="content-card-item-content-image-description">
          {time}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
