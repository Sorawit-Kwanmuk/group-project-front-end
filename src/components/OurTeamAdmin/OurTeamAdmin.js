import "./styleOurTeam.css";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/SearchSharp";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InstructorCard from "../InstructorCard/InstructorCard";
import Pagination from "@mui/material/Pagination";

import { InputBaseConfig, IconButtonConfig, ButtonConfig } from "./muiConfig";
import { useState } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
function OurTeamAdmin() {
  const [orderBy, setOrderBy] = useState("");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSummitSearch = (e) => {};

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
              Our Team Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="OurTeamSearch">
          <div className="buttonSelectOurTeam">
            <Button sx={ButtonConfig} variant="contained">
              Front - End
            </Button>
            <Button sx={ButtonConfig} variant="contained">
              Back - End
            </Button>
            <Button sx={ButtonConfig} variant="contained">
              UX / UI Design
            </Button>
          </div>
          <div className="searchBarOurTeam">
            <div className="searchByInputTextOurTeam">
              <form action="" onSubmit={handleSummitSearch}>
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
                  <MenuItem size="small" value={"Css"}>
                    Css
                  </MenuItem>
                  <MenuItem size="small" value={"javaScript"}>
                    JavaScript
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="outputSearchFieldOurTeam">
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
            <InstructorCard />
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

export default OurTeamAdmin;
