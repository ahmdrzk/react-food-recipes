import { Circle, HStack, Text, VStack } from "@chakra-ui/react";

const InfoItem = ({ title, info, Icon }) => {
  return (
    <HStack alignItems="center" fontSize="sm">
      <Circle mr={1} p={4} bgColor="gray.200" fontSize="xl">
        <Icon />
      </Circle>
      <VStack alignItems="flex-start" lineHeight={1}>
        <Text as="span" mt={-2} fontWeight="semibold">
          {title}
        </Text>
        <Text as="span">{info}</Text>
      </VStack>
    </HStack>
  );
};

export default InfoItem;
