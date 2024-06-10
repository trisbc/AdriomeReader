import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Typography, Box } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Typography variant="h2">
        h1. Heading
      </Typography>
      <Typography variant="body1" component="p" >
        Test
      </Typography>
    </Box>
  );
}

export default App;
