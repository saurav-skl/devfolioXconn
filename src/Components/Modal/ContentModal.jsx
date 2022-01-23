import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import unavailable_img from "../../img/unavailable_img.png";
import "./ContentModal.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#867666",
    border: "1px solid #D5C3AA",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

const ContentModal = ({ detail, open, setOpen }) => {
  const classes = useStyles();

  const image =
    detail.volumeInfo.imageLinks !== undefined
      ? detail.volumeInfo.imageLinks.thumbnail
      : unavailable_img;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {detail && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={image}
                  alt={"bla bla"}
                  className="ContentModal__portrait"
                />
                <img
                  src={unavailable_img}
                  alt={"tuktuk"}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  {detail.volumeInfo.title && (
                    <i className="tagline">Title: {detail.volumeInfo.title}</i>
                  )}
                  {detail.volumeInfo.authors && (
                    <i className="tagline">
                      Author: {detail.volumeInfo.authors}
                    </i>
                  )}
                  {detail.volumeInfo.publisher && (
                    <i className="tagline">
                      publisher: {detail.volumeInfo.publisher}
                    </i>
                  )}
                  {detail.volumeInfo.publishedDate && (
                    <i className="tagline">
                      publishedDate: {detail.volumeInfo.publishedDate}
                    </i>
                  )}
                  {detail.volumeInfo.averageRating && (
                    <i className="tagline">
                      averageRating: {detail.volumeInfo.averageRating}
                    </i>
                  )}
                  {detail.volumeInfo.ratingsCount && (
                    <i className="tagline">
                      ratingsCount: {detail.volumeInfo.ratingsCount}
                    </i>
                  )}
                  {detail.volumeInfo.maturityRating && (
                    <i className="tagline">
                      maturityRating: {detail.volumeInfo.maturityRating}
                    </i>
                  )}

                  <span className="ContentModal__description">
                    {detail.volumeInfo.description
                      ? detail.volumeInfo.description
                      : "Sorry, No information..."}
                  </span>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
};

export default ContentModal;
