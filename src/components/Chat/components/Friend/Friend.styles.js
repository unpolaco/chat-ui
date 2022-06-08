import styled from "@emotion/styled";
import { Badge } from "@mui/material";

export const StyledBadge = styled(Badge)(({ userStatus, theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: userStatus === "online" ? "#44b700" : "#f44336",
    color: userStatus === "online" ? "#44b700" : "#f44336",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
