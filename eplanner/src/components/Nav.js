import '../App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';

function Nav() {

  // Serves the purpose of bolding the navigation item of the page the user is currently on.
  var homeSelected = false;
  var viewSelected = false;
  var createSelected = false;
  var editSelected = false;

  if (window.location.pathname === "/home") {
    homeSelected = true;
  } else {
    homeSelected = false;
  }

  if (window.location.pathname === "/view") {
    viewSelected = true;
  } else {
    viewSelected = false;
  }

  if (window.location.pathname === "/create") {
    createSelected = true;
  } else {
    createSelected = false;
  }

  if (window.location.pathname === "/edit") {
    editSelected = true;
  } else {
    editSelected = false;
  }

  return (
    <List sx={{ maxWidth: 300, height: "250vh", p: 3, borderRight: 2, borderColor: "gray" }}>
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton selected={homeSelected}>
            <ListItemDecorator>
              🏠
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/view" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton selected={viewSelected}>
            <ListItemDecorator>
              📚
            </ListItemDecorator>
            View My Projects
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/create" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton selected={createSelected}>
            <ListItemDecorator>
              🧾
            </ListItemDecorator>
            Create New Project
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/edit" style={{ textDecoration: "none", color: "black" }}>
        <ListItem sx={{ pb: 2 }}>
          <ListItemButton selected={editSelected}>
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