import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../SingleContent/SingleContent";
import { Container, Snackbar } from "@material-ui/core";

const searchCard = {
  margin: "75px auto",
  background: "#F7DED2",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "10px",
};

const Home = () => {
  const [content, setContent] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Loading...");

  const fetchSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://www.googleapis.com/books/v1/volumes?q=test",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = res.data;
      if (data.items !== undefined && data.items.length > 0) {
        setContent(data.items);
      } else {
        setMessage("Not Found...");
        setOpen(true);
      }
    } catch (error) {
      setMessage("Bad Request...");
      setOpen(true);
    }
  };

  useEffect(() => {
    fetchSearch();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <div className="trending" style={searchCard}>
          {content &&
            content.map((c) => (
              <SingleContent key={c.id} id={c.id} detail={c} />
            ))}
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </Container>
    </>
  );
};
export default Home;
