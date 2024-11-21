"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import SignpostIcon from "@mui/icons-material/Signpost";

const navlinks = [
  ["Home", "/"],
  ["SAGE", "/sage"],
  ["GUARD", "/guard"],
  ["ARTISAN", "/artisan"],
  ["About us", "/about"],
];
const pages = ["SAGE", "GUARD", "ARTISAN", "About"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="fixed bg-eu-blue shadow-md">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for Desktop */}
          <SignpostIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            component={Link}
            href="/"
            className="hidden md:flex font-mono font-bold tracking-wider text-white no-underline hover:opacity-90 mr-4">
            PATHFINDER
          </Typography>

          {/* Mobile Navigation Menu */}
          <div className="flex flex-grow md:hidden">
            <IconButton
              size="large"
              aria-label="Open navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link href={`${page.toLowerCase()}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
          <SignpostIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            PATHFINDER
          </Typography>
          <nav className="hidden md:flex space-x-2">
            {navlinks.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="rounded-lg px-2 py-1 text-slate-200 font-medium hover:bg-slate-200 hover:text-slate-800">
                {title}
              </a>
            ))}
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
