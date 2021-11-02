import "./styleOurTeam.css";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/SearchSharp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import { InputBaseConfig, IconButtonConfig, ButtonConfig } from "./muiConfig";
import { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";

function FeedbackAdmin() {
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [issueInfo, setIssueInfo] = useState([
    {
      issueNo: 1,
      status: true,
      dateSent: "9-25-2021",
      email: "googbot@gmail.com",
      topic: "Can't claim Fullstack certificate.",
      content:
        "Can't claim certificate from Fullstack course eventhough all lessons completed."
    },
    {
      issueNo: 2,
      status: false,
      dateSent: "10-25-2021",
      email: "giigbot@gmail.com",
      topic: "Can't claim Data science certificate.",
      content:
        "Can't claim certificate from Data science course eventhough all lessons completed."
    }
  ]);

  const handleSummitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="divMainControllerOurTeam">
        <AppBar position="static" sx={{ color: "#03045E", bgcolor: "#ADE8F4" }}>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              align="center"
              sx={{ width: "100%" }}
            >
              Feedback Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="OurTeamSearch">
          <div className="buttonSelectOurTeam">
            <Button sx={ButtonConfig} variant="contained">
              All
            </Button>
            <Button sx={ButtonConfig} variant="contained">
              Unresolved
            </Button>
            <Button sx={ButtonConfig} variant="contained">
              Resolved
            </Button>
          </div>
          <div className="searchBarOurTeam">
            <div className="searchByInputTextOurTeam">
              <form onSubmit={(e) => handleSummitSearch(e)}>
                <div className="inputSearchTextOurTeam">
                  <p>Search</p>
                  <InputBase
                    sx={InputBaseConfig}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <IconButton type="submit" aria-label="search">
                    <SearchIcon sx={IconButtonConfig} />
                  </IconButton>
                </div>
              </form>
            </div>
            <div className="searchBySelectOurTeam">
              <div className="OrderByOurTeamP">
                <p>Order By</p>
              </div>
              <FormControl size="small" fullWidth>
                <InputLabel size="small" id="demo-simple-select-label">
                  Part
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={orderBy}
                  label="Part"
                  size="small"
                  sx={{ backgroundColor: "#f5f5f5" }}
                  onChange={(e) => setOrderBy(e.target.value)}
                >
                  <MenuItem size="small" value={"html"}>
                    HTML
                  </MenuItem>
                  <MenuItem size="small" value={"css"}>
                    CSS
                  </MenuItem>
                  <MenuItem size="small" value={"javascript"}>
                    JavaScript
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="outputSearchFieldOurTeam">
            {issueInfo
              .sort((a, b) => b.issueNo - a.issueNo)
              .map((card, idx) => (
                <FeedbackCard
                  issueNo={card.issueNo}
                  status={card.status}
                  dateSent={card.dateSent}
                  email={card.email}
                  topic={card.topic}
                  content={card.content}
                  setIssueInfo={setIssueInfo}
                  index={idx}
                />
              ))}
          </div>
        </div>
        <div className="divPaginationSearchOurTeam">
          <Pagination
            count={10}
            color="primary"
            value={page}
            onChange={(e, value) => setPage(value)}
          />
        </div>
      </div>
    </>
  );
}

export default FeedbackAdmin;
