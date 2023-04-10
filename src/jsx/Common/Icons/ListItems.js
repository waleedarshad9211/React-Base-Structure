import { Stack } from "@mui/material";
import Icon from "./Icon";

const ListItems = ({ array, spacing, direction }) => {
  return (
    <Stack spacing={spacing} direction={direction}>
      {array.map(({ icon, onClick }, index) => {
        return <Icon icon={icon} onClick={onClick} />;
      })}
    </Stack>
  );
};

export default ListItems;
