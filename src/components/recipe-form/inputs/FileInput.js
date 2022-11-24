import {
  FormControl,
  FormLabel,
  Icon,
  Image,
  Text,
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import { BsCardImage } from "react-icons/bs";

const FileInput = ({ imageRef, imagePreviewSrc, handleOnChangeFileInput }) => {
  return (
    <>
      <FormControl>
        <FormLabel
          htmlFor="image"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="12rem"
          border="2px"
          borderColor="teal.600"
          borderRadius="lg"
          p={2}
          bgColor="teal.50"
          color="teal.900"
          fontWeight="semibold"
          textAlign="center"
          cursor="pointer"
          _hover={{ bgColor: "teal.100" }}
        >
          <Icon as={BsCardImage} color="teal.600" boxSize={5} mr={2} />
          Upload Image
        </FormLabel>
        <VisuallyHiddenInput
          id="image"
          type="file"
          name="image"
          ref={imageRef}
          onChange={handleOnChangeFileInput}
        />
      </FormControl>

      {imagePreviewSrc && (
        <>
          <Text as="span" fontSize="sm" fontWeight="semibold">
            Image preview
          </Text>
          <Image
            src={imagePreviewSrc}
            alt="Not allowed image selected another one"
            objectFit="cover"
            boxSize={48}
            mt={2}
            border="4px"
            borderColor="gray.400"
            borderRadius="lg"
            color="red.400"
            fontSize="sm"
          />
        </>
      )}
    </>
  );
};

export default FileInput;
