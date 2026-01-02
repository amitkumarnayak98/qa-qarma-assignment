import * as React from "react";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./LimitTags.css";

export default function LimitTags({ setFormData }) {
  const onTagsChange = (event, values) => {
    setFormData((prev) => {
      return { ...prev, limits: values };
    });
  };

  return (
    <div className="auto-complete">
      <Autocomplete
        multiple
        freeSolo
        options={top100Films}
        getOptionLabel={(option) => option }
        onChange={onTagsChange}
        renderInput={(params) => (
          <TextField
            {...params}
            defaultValue={[]}
            label="limitTags"
            variant="outlined"
            name="titleone"
          />
        )}
        sx={{ width: "400px", height: 10, color: "white", background: "white" }}
      />
    </div>
  );
}

const top100Films = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Godfather: Part II",
  "The Dark Knight",

  "12 Angry Men",
  "Schindler's List",
  "Pulp Fiction",

  "The Lord of the Rings: The Return of the King",

  "The Good, the Bad and the Ugly",
  "Fight Club",

  "The Lord of the Rings: The Fellowship of the Ring",

  "Star Wars: Episode V - The Empire Strikes Back",

  "Forrest Gump",
  "Inception",
];
