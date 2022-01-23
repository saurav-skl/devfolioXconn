import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Header.css";

const headerStyle = {
  cursor: "pointer",
  backgroundColor: "#F2AA4CFF",
};

const Header = () => {
  return (
    <AppBar style={headerStyle}>
      <Toolbar>
        <Typography variant="h5" style={{ margin: "auto" }}>
          <strong> Books Store API </strong>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;


