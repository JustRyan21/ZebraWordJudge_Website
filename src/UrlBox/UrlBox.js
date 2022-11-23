import React from 'react';
import TextField from "@mui/material/TextField";
import './UrlBox.css';

function UrlBox(props) {
    return (
        <div className="main">
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={props.handleUrl}
              variant="outlined"
              fullWidth
              label="URL"
            />
          </div>
        </div>
      ); 
}

export default UrlBox;