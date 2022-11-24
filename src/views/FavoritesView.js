import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import { getFavoriteRecipesThunk } from "../redux/actions/thunkFunctions";
import Carousel from "../components/carousel/Carousel";

const FavoritesView = () => {
  const { isLoading, entities } = useSelector((state) => state.recipes);
  const recipesArr = Object.values(entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipesThunk);
  }, [dispatch]);

  if (recipesArr.length < 1 && isLoading) return <LoadingSpinner />;

  return (
    <>
      {recipesArr.length < 1 && !isLoading ? (
        <Heading as="h4" size="md" textAlign="center">
          No Favorite Recipes Found! Start Favoriting.
        </Heading>
      ) : (
        <Box maxW="container.md" m="auto">
          <Heading as="h5" size="md" mb={6}>
            My Favorite Recipes
          </Heading>

          <Carousel data={recipesArr} />
        </Box>
      )}
    </>
  );
};

export default FavoritesView;
