import { useTheme } from "@emotion/react";
import { Box, Typography, IconButton, Tooltip } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  const {
    palette: { neutral },
  }: any = useTheme();

  return (
    <Box
      sx={{
        marginTop: "70px",
        padding: "40px 0",
        backgroundColor: { neutral },
      }}
    >
      <Box width="80%" margin="auto" textAlign={"center"}>
        {/* Contact info section */}
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">Geneva, Elganayn, Suez, Egypt</Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            nagyy8751@gmail.com
          </Typography>
          <Typography mb="30px">+0201094066795</Typography>
        </Box>

        {/* Social links section */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <IconButton
            size="large"
            sx={{ mr: 3, color: "#1877F2" }}
            target="_blank"
            href="https://www.facebook.com/pages/create/?ref_type=site_footer"
          >
            <Tooltip title="Facebook">
              <FacebookIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            size="large"
            sx={{ mr: 3, color: "#1DA1F2" }}
            target="_blank"
            href="https://help.twitter.com/en/managing-your-account/how-to-customize-your-profile"
          >
            <Tooltip title="Twitter">
              <TwitterIcon />
            </Tooltip>
          </IconButton>
          <IconButton
            size="large"
            sx={{ color: "#FF135A" }}
            target="_blank"
            href="https://help.instagram.com/110121795815331"
          >
            <Tooltip title="Instagram">
              <InstagramIcon />
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
