import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "./Nav";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useParams, Link } from "react-router-dom";

function NotFound() {
    return (
        <Stack className="center" spacing={3} sx={{ height: "100vh" }}>
            <h1>There was a problem with your user account. Please try logging in again.</h1>
            <h2>Click Below to Return to Login</h2>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button sx={{ ml: 3 }} variant="contained">
                    Back to Login
                </Button>
            </Link>
        </Stack>
    );
}

export default NotFound;
