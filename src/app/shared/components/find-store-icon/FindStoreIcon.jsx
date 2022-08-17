import { Button } from "@mui/material";
import { LocationOn } from "@mui/icons-material";
import "./FindStoreIcon.scss";

export const FindStoreIcon = () => {
  return (
    <Button className="findStoreIcon">
      <LocationOn />
      Find a store
    </Button>
  );
};
