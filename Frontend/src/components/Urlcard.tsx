import React from "react";

type UrlCardProps = {
  title: string;
  image: string;
};

function Urlcard({ title, image }: UrlCardProps) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt="" />
      </div>
      <div className="card__title">
        <a href="example.com">{title}</a>
      </div>
      <div className="card__website">
        <a href="example.com">Website</a>
      </div>
    </div>
  );
}

export default Urlcard;
