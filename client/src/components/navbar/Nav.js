import React from "react";
import { Box } from "@mui/material";
import logo from "../../assets/logo.jpg"

const Nav = () => {
  return (
    <Box
      sx={{
        height: { xl: "85px", lg: "85px", md: "80px", sm: "60px", xs: "60px" },
        background: "black",
        mt: "-8px",
        ml: "-8px",
        mr: { xl: "-8px", lg: "-8px", md: "-8px", sm: "-24px", xs: "-24px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: {
            xl: "175px",
            lg: "175px",
            md: "75px",
            sm: "44px",
            xs: "44px",
          },
          height: {
            xl: "80px",
            lg: "80px",
            md: "43px",
            sm: "25px",
            xs: "25px",
          },
          left: { xl: "40px", lg: "40px", md: "40px", sm: "26px", xs: "26px" },
          top: { xl: "5px", lg: "5px", md: "18px", sm: "12px", xs: "12px" },
        }}
      >
        <img src={logo} alt="" />
      </Box>
      <Box sx={{
          position: "absolute",
          left: { xl: "1279px", lg: "1279px", md: "920px", sm: "628px", xs: "26px" },
          top: { xl: "0px", lg: "-5px", md: "18px", sm: "2px", xs: "12px" },
          color: "white",
          fontSize: "20px",
          display: "flex",
        }}
      >
      <a className="list_name12" href="https://csb-dxtdge-chandanhm1999.vercel.app/" >Gallery 🎭</a>
      </Box>
    </Box>
  );
};

export default Nav;
