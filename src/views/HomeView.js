import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Heading } from "@chakra-ui/react";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import RecipeSummaryCard from "../components/recipe-summary-card/RecipeSummaryCard";
import { getAllRecipesThunk } from "../redux/actions/thunkFunctions";

const HomeView = () => {
  const { isLoading, entities } = useSelector((state) => state.recipes);
  const recipesArr = Object.values(entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecipesThunk);
  }, [dispatch]);

  if (recipesArr.length < 1 && isLoading) return <LoadingSpinner />;

  return (
    <>
      {recipesArr.length < 1 && !isLoading ? (
        <Heading as="h4" size="md" textAlign="center">
          No Recipes Found! Start Creating.
        </Heading>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          justifyItems="center"
          rowGap={4}
          columnGap={2}
        >
          {recipesArr.map((recipe) => (
            <RecipeSummaryCard key={recipe._id} recipe={recipe} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeView;
