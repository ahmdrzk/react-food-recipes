import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
} from "@chakra-ui/react";

import { convertStrToId } from "../../../helpers/stringHelpers";

const TextArea = ({
  label,
  placeholder,
  value,
  errorMsg,
  onChange,
  onBlur,
}) => {
  const id = convertStrToId(label);

  return (
    <FormControl isInvalid={errorMsg} isRequired>
      <FormLabel htmlFor={id} fontWeight="semibold">
        {label}
      </FormLabel>
      <ChakraTextarea
        id={id}
        placeholder={placeholder}
        borderColor="gray.400"
        bgColor="whiteAlpha.900"
        _placeholder={{ color: "gray.600", fontSize: "sm" }}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};

export default TextArea;
