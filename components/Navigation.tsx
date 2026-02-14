"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import SignpostIcon from "@mui/icons-material/Signpost";

const navlinks = [
  { title: "Home", path: "/", target: "_self" },
  { title: "SAGE", path: "https://sage.ai-pathfinder.eu", target: "_blank" },
  { title: "GUARD", path: "/guard", target: "_self" },
  { title: "ARTISAN", path: "/artisan", target: "_self" },
  { title: "About Us", path: "/about", target: "_self" },
];

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
              {navlinks.map(({ title, path, target }) => (
                <MenuItem
                  key={title}
                  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      href={path}
                      className="text-gray-900 no-underline"
                      target={target}
                      rel={target === "_blank" ? "noopener noreferrer" : undefined}>
                      {title}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* Logo for Mobile */}
          <SignpostIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            className="flex-grow md:hidden font-mono font-bold tracking-wider text-white no-underline hover:opacity-90">
            PATHFINDER
          </Typography>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-4">
            {navlinks.map(({ title, path, target }) => (
              <Link
                key={title}
                href={path}
                className="rounded-lg px-1 py-1 text-gray-200 font-medium hover:bg-gray-200 hover:text-gray-900 transition-colors"
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}>
                {title}
              </Link>
            ))}
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
