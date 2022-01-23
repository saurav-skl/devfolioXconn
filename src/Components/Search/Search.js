import React, { useState } from "react";

import axios from "axios";
import { Button, Container, Snackbar, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import SingleContent from "../SingleContent/SingleContent";

const searchStyle = {
  display: "flex",
  height: "100px",
  justifyContent: "center",
  padding: "20px",
};
const searchCard = {
  margin: "75px auto",
  background: "#F7DED2",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: "20px",
  padding: "10px",
};

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("Loading...");

  const fetchSearch = async () => {
    try {
      const res = await axios({
        method: "get",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + searchText,
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = res.data;
      if (data.items !== undefined) {
        if (data.items.length > 0) {
          setContent(data.items);
        }
      } else {
        setMessage("Not Found...");
        setOpen(true);
        setSearchText("");
      }
    } catch (error) {
      setMessage("Bad Request...");
      setOpen(true);
      setSearchText("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Container>
        <div className="search" style={searchStyle}>
          <TextField
            className="searchBox"
            style={{ flex: 1 }}
            size="medium"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10, height: "55px" }}
            size="small"
          >
            <SearchIcon />
          </Button>
        </div>
        <div className="trending" style={searchCard}>
          {content &&
            content.map((c) => (
              <div>
                <SingleContent key={c.id} id={c.id} detail={c} />
              </div>
            ))}
        </div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={message}
        />
      </Container>
    </div>
  );
};
export default Search;
