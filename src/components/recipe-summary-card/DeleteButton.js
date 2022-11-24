import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@chakra-ui/react";
import { BsXLg } from "react-icons/bs";
import { deleteRecipeThunkWrapper } from "../../redux/actions/thunkFunctions";

const DeleteButton = ({ recipeId }) => {
  const [isLoadingLocal, setIsLoadingLocal] = useState(false);
  const { isLoading } = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const handleOnDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (isConfirmed) {
      setIsLoadingLocal(true);
      dispatch(deleteRecipeThunkWrapper(recipeId));
    }
  };

  return (
    <IconButton
      colorScheme="red"
      size="sm"
      aria-label="Delete recipe"
      icon={<BsXLg />}
      pos="absolute"
      top={-2}
      right={-2}
      borderRadius="full"
      opacity={0}
      transitionProperty="all"
      transitionDuration="slow"
      transitionTimingFunction="ease"
      isLoading={isLoadingLocal && isLoading && true}
      onClick={handleOnDelete}
    />
  );
};

export default DeleteButton;
