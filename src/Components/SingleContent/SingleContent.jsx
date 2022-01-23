import unavailable_img from "../../img/unavailable_img.png";
import React, { useState } from "react";
import ContentModal from "../Modal/ContentModal";
import "./SingleContent.css";
import { Button } from "@material-ui/core";

const SingleContent = ({ detail }) => {
  const [open, setOpen] = useState(false);

  const image =
    detail.volumeInfo.imageLinks !== undefined
      ? detail.volumeInfo.imageLinks.thumbnail
      : unavailable_img;

  const author =
    detail.volumeInfo.authors !== undefined
      ? detail.volumeInfo.authors
      : "unknown";
  const pdate =
    detail.volumeInfo.publishedDate !== undefined
      ? detail.volumeInfo.publishedDate
      : "unknown";

  const avgrating =
    detail.volumeInfo.averageRating !== undefined
      ? detail.volumeInfo.averageRating
      : "*";

  const publisher =
    detail.volumeInfo.publisher !== undefined
      ? detail.volumeInfo.publisher
      : "unknown";

  return (
    <>
      <div className="card">
        <div className="img">
          <img src={image} alt={detail.id} title={detail.id} />
        </div>
        <div className="card-text">
          <h2>Title: {detail.volumeInfo.title}</h2>
          <div className="price">Publisher: {publisher}</div>
          <div className="tag">{author}</div>
          <div className="rate">{avgrating}</div>

          <div className="desc">publishedDate: {pdate}</div>

          <Button
            variant="contained"
            size="small"
            style={{
              margin: "15px",
              bottom: "0",
              justifyContent: "center",
              left: "50px",
            }}
            onClick={() => setOpen(true)}
          >
            Checkout
          </Button>
          <ContentModal detail={detail} open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
};

export default SingleContent;

