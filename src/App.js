import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./redux/store";
import customTheme from "./theme";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/layout/LoadingSpinner";
const HomeView = lazy(() => import("./views/HomeView"));
const AddRecipeView = lazy(() => import("./views/AddRecipeView"));
const RecipeView = lazy(() => import("./views/RecipeView"));
const EditRecipeView = lazy(() => import("./views/EditRecipeView"));
const FavoritesView = lazy(() => import("./views/FavoritesView"));
const NotFoundView = lazy(() => import("./views/NotFoundView"));

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/add-recipe" element={<AddRecipeView />} />
                <Route path="/recipes" element={<Navigate to="/" replace />} />
                <Route path="/recipes/:recipeId" element={<RecipeView />} />
                <Route
                  path="/recipes/:recipeId/edit"
                  element={<EditRecipeView />}
                />
                <Route path="/favorites" element={<FavoritesView />} />
                <Route path="*" element={<NotFoundView />} />
              </Routes>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
