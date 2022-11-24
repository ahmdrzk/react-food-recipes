import { Center, Spinner } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <Center w="full" h="full">
      <Spinner color="brand.500" size="xl" speed="0.6s" thickness="4px" />
    </Center>
  );
};

export default LoadingSpinner;
