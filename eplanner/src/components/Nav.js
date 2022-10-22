import '../App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

function getPage() {
  var pathname = window.location.href;

  switch (pathname) {
    case "/home":
      console.log("home");
      break;
    case "/view":
      console.log("view");
      break;
    case "/create":
      console.log("create");
      break;
    case "/edit":
      console.log("edit");
      break;
    default:
      console.log("error");
      break;
  }
}

function Nav() {
  return (
    <List sx={{ maxWidth: 300, height: "100vh", p: 3, borderRight: 2, borderColor: "gray" }}>
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              🏠
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/view" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              📚
            </ListItemDecorator>
            View My Projects
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/create" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              🧾
            </ListItemDecorator>
            Create New Project
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/edit" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton>
            <ListItemDecorator>
              ✏️
            </ListItemDecorator>
            Edit User Information
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
}

export default Nav;