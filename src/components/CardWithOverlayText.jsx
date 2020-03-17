import React from "react";

export default function CardWithOverlayText({ hotItem }) {
  const { image, title, dateAndTime, participants } = hotItem;
  return (
    <div
      class="card-big shadow"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover"
      }}
    >
      <div class="card-title">
        <h2>{title}</h2>
        <h3>
          {dateAndTime}&nbsp;&nbsp; / &nbsp;&nbsp;{participants} Participants
        </h3>
      </div>
    </div>
  );
}
