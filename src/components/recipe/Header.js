import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Center,
  Grid,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  GiBackup,
  GiCook,
  GiForkKnifeSpoon,
  GiStopwatch,
  GiHamburgerMenu,
} from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import InfoItem from "./InfoItem";
import {
  deleteRecipeThunkWrapper,
  updateRecipeThunkWrapper,
} from "../../redux/actions/thunkFunctions";

const Header = ({ recipeData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigateToEdit = () => {
    navigate(`/recipes/${recipeData._id}/edit`, { state: recipeData });
  };

  const handleOnToggleFavorite = () => {
    dispatch(
      updateRecipeThunkWrapper(
        recipeData._id,
        { isFavorited: !recipeData.isFavorited },
        (recipeId) => navigate(`/recipes/${recipeId}`)
      )
    );
  };

  const handleOnDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this recipe?"
    );

    if (isConfirmed) {
      dispatch(deleteRecipeThunkWrapper(recipeData._id));
      navigate("/");
    }
  };

  return (
    <>
      <Box pos="relative">
        <Image
          src={recipeData.image}
          alt={recipeData.title}
          fallbackSrc={`${process.env.REACT_APP_IMAGES_CLOUD_URL}/placeholder_bdia8a.webp`}
          objectFit="cover"
          w="full"
          h="50vw"
          maxH="xs"
          mb={6}
          borderRadius="sm"
        />

        <IconButton
          size="lg"
          variant={recipeData.isFavorited ? "solid" : "outline"}
          icon={
            <Icon
              as={IoMdHeart}
              boxSize={10}
              color={recipeData.isFavorited ? "brand.500" : "gray.600"}
            />
          }
          aria-label="Set as favorite"
          pos="absolute"
          top={4}
          right={4}
          onClick={handleOnToggleFavorite}
        />

        <Box pos="absolute" bottom={4} right={4}>
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="brand"
              leftIcon={<GiHamburgerMenu />}
              border="2px"
            >
              Options
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={<BsPencilSquare />}
                onClick={handleNavigateToEdit}
              >
                Edit
              </MenuItem>
              <MenuItem icon={<BsTrash />} onClick={handleOnDelete}>
                Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>

      <Center mb={4}>
        <Badge colorScheme="green" px={2} fontSize="lg">
          {recipeData.category}
        </Badge>
      </Center>

      <Heading
        as="h2"
        size="lg"
        mb={6}
        textAlign="center"
        textTransform="capitalize"
      >
        {recipeData.title}
      </Heading>

      <Center mb={10}>
        <HStack display={{ base: "contents", md: "flex" }} gap={12}>
          <Grid
            display={{ base: "grid", md: "contents" }}
            templateColumns={"repeat(2, 1fr)"}
            gap={8}
          >
            <InfoItem
              title="prep time"
              info={recipeData.prepTime}
              Icon={GiForkKnifeSpoon}
            />
            <InfoItem
              title="cooking time"
              info={recipeData.cookTime}
              Icon={GiStopwatch}
            />
            <InfoItem title="serves" info={recipeData.serves} Icon={GiBackup} />
            <InfoItem
              title="difficulty"
              info={recipeData.difficulty}
              Icon={GiCook}
            />
          </Grid>
        </HStack>
      </Center>
    </>
  );
};

export default Header;
