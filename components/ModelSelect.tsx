import React from "react";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
import { InputLabel } from "@mui/material";

interface ModelSelectProps {
  id: string;
  label: string;
  control: any;
}

export default function ModelSelect(props: ModelSelectProps) {
  return (
    <Controller
      name={props.id}
      control={props.control}
      render={({ field }) => (
        <div id={props.id}>
          <InputLabel>Model</InputLabel>
          <Select {...field} fullWidth>
            <ListSubheader>OpenAI</ListSubheader>
            <MenuItem value={"gpt-3.5-turbo"}>GPT 3.5</MenuItem>
            <MenuItem value={"gpt-4"}>GPT 4</MenuItem>
            <ListSubheader>Anthropic</ListSubheader>
            <MenuItem value={"claude-2"}>Claude 2</MenuItem>
          </Select>
        </div>
      )}
    />
  );
}
