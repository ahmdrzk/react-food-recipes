import { Box } from "@chakra-ui/react";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box
      bgImage={`${process.env.REACT_APP_IMAGES_CLOUD_URL}/placeholder_bdia8a.webp`}
    >
      <Box bgColor="rgba(255,255,255,0.9)">
        <Header />
        <Box as="main" maxW="container.lg" minH="100vh" m="auto" px={4} py={6}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
