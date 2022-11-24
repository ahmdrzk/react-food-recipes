import { ListIcon, ListItem } from "@chakra-ui/react";
import { BsFillCheckSquareFill, BsFillDashSquareFill } from "react-icons/bs";

const Ingredient = ({ text, isCompleted, onComplete }) => {
  return (
    <ListItem
      display="flex"
      alignItems="center"
      border="1px"
      borderColor="gray.300"
      p={2}
      color={isCompleted ? "blackAlpha.500" : "initial"}
      _notLast={{ borderBottom: "none" }}
      _first={{ borderTopRadius: "md" }}
      _last={{ borderBottomRadius: "md" }}
    >
      <ListIcon
        as={isCompleted ? BsFillCheckSquareFill : BsFillDashSquareFill}
        color={isCompleted ? "brand.500" : "brand.100"}
        cursor="pointer"
        onClick={onComplete}
      />
      {text}
    </ListItem>
  );
};

export default Ingredient;
