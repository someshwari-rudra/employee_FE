import { FormHelperText, MenuItem, Select } from "@mui/material";
import React from "react";
import EMPTextField from "./EMPTextField";

const RenderFromFields = ({ fields, onChange, values, errors }) => {
  const renderField = ({ name, field, error, onChange }) => {
    switch (field?.renderType) {
      case "textField":
        return (
          <EMPTextField
            {...{ field, name, label: field.label, error, sx: field?.sx }}
            type={field.type}
            helperText={error}
            error={error ? true : false}
            value={values?.[name] || ""}
            onChange={onChange}
          />
        );
      case "select":
        return (
          <>
            <Select
              {...{ name, error, sx: field?.sx }}
              value={values?.[name] || ""}
              onChange={(e) => onChange(e)}
              displayEmpty
            >
              {field?.options?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {Object.entries(fields).map(([name, field], ind) => {
        return (
          <div key={ind}>
            {renderField({ name, field, onChange, error: errors?.[name] })}
          </div>
        );
      })}
    </div>
  );
};

export default RenderFromFields;
