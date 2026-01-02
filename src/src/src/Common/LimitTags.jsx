import * as React from "react";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./LimitTags.css";

export default function LimitTags({ setFormData }) {
  const [roles, setRoles] = useState(top100Films);

  const onChange = (e) => {
    const select = e.target.value;
    if (e.key === "Enter") {
      setFormData((prev) => {
        return { ...prev, limits: [...prev.limits, select] };
      });
    }
  };

  return (
    <div className="auto-complete">
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={roles}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        autoSelect="true"
        autoSave="true"
        freeSolo
        includeInputInList="false"
        onInputChange={onChange}
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  // {"Anil","Ravi","Bipin", "Starboy"}
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
