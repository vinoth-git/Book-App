import Link from "next/link";
import React from "react";
import styles from "../../styles/home.module.css";
import {
  HomeOutlined,
  LibraryBooksOutlined,
  SearchOutlined,
  ConnectWithoutContactOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import { Hidden, IconButton, Menu, MenuItem } from "@mui/material";
import router from "next/router";

interface Props {}

function HeaderNav(props: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  let navList = [
    {
      name: "Home",
      href: "/home",
      NavIcon: HomeOutlined,
    },
    {
      name: "Browse",
      href: "/browse",
      NavIcon: LibraryBooksOutlined,
    },
    {
      name: "Search",
      href: "/search?query=marvel",
      NavIcon: SearchOutlined,
    },
    {
      name: "Contact Us",
      href: "/contact",
      NavIcon: ConnectWithoutContactOutlined,
    },
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    router.push();
  };
  return (
    <div className={styles.navHeader}>
      <Link href="/">
        <a className={styles.logo}>Book App</a>
      </Link>
      <Hidden mdDown>
        <div>
          {navList.map((c) => (
            <Link key={c.name} href={c.href}>
              <a className={styles.navLink}>
                <c.NavIcon />
                {c.name}
              </a>
            </Link>
          ))}
        </div>
      </Hidden>

      <Hidden mdUp>
        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={open ? handleClose : handleClick}
          >
            {open ? (
              <CloseOutlined color="info" />
            ) : (
              <MenuOutlined color="info" />
            )}
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {navList.map((c) => (
              <MenuItem
                key={c.name}
                onClick={() => {
                  handleClose();
                  router.push(c.href);
                }}
                className={styles.navLink}
              >
                {" "}
                <c.NavIcon />
                {c.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Hidden>
    </div>
  );
}

export default HeaderNav;
