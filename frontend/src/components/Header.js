import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MoreIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import { LinkContainer } from "react-router-bootstrap";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  bgColor: {
    backgroundColor: "#1D1D1D",
  },
  toolbar: {
    minHeight: 100,
  },
  title: {
    marginRight: "12px",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const facebookURL = "https://web.facebook.com/chocokises";
  const linkedInURL = "https://www.linkedin.com/in/ariel-espinoza-4044a8200/";
  const githubURL = "https://github.com/ariel041596";
  const viewFacebook = () => {
    window.open(facebookURL, "_blank").focus();
  };
  const viewLinkedIn = () => {
    window.open(linkedInURL, "_blank").focus();
  };
  const viewGithub = () => {
    window.open(githubURL, "_blank").focus();
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={viewFacebook}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <FacebookIcon />
          </Badge>
        </IconButton>
        <p>Facebook</p>
      </MenuItem>
      <MenuItem onClick={viewLinkedIn}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <LinkedInIcon />
          </Badge>
        </IconButton>
        <p>LinkedIn</p>
      </MenuItem>
      <MenuItem onClick={viewGithub}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <GitHubIcon />
        </IconButton>
        <p>Github</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.bgColor}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <LinkContainer to="/">
              <Typography className={classes.title} variant="h4" noWrap>
                Ariel Espinoza{" "}
              </Typography>
            </LinkContainer>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                onClick={viewFacebook}
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge b color="secondary">
                  <FacebookIcon />
                </Badge>
              </IconButton>
              <IconButton
                onClick={viewLinkedIn}
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge color="secondary">
                  <LinkedInIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={viewGithub}
                color="inherit"
              >
                <GitHubIcon />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Header;
