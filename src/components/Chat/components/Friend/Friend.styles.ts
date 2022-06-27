import styled from "@emotion/styled";
import { Badge } from "@mui/material";
//@ts-ignore
export const StyledBadge = styled(Badge)(({ userstatus, theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: userstatus === "online" ? "#44b700" : "#f44336",
    color: userstatus === "online" ? "#44b700" : "#f44336",
    //@ts-ignore
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));
