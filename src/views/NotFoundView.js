import { useNavigate } from "react-router-dom";
import { Button, Heading, VStack } from "@chakra-ui/react";

const NotFoundView = () => {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <VStack>
      <Heading as="h2" size="lg" mb={6}>
        OOPS! This Page is Not Found.
      </Heading>
      <Button
        colorScheme="brand"
        size="lg"
        variant="outline"
        onClick={handleNavigateToHome}
      >
        Go Home
      </Button>
    </VStack>
  );
};

export default NotFoundView;
