import {
  FormControl,
  FormLabel,
  NumberInputField,
  NumberInput as ChakraNumberInput,
  FormErrorMessage,
} from "@chakra-ui/react";

import { convertStrToId } from "../../../helpers/stringHelpers";

const NumberInput = ({ label, value, errorMsg, onChange, onBlur }) => {
  const id = convertStrToId(label);

  return (
    <FormControl isInvalid={errorMsg} isRequired>
      <FormLabel htmlFor={id} fontWeight="semibold">
        {label}
      </FormLabel>
      <ChakraNumberInput max={50} min={1} name={id} value={value}>
        <NumberInputField
          id={id}
          placeholder="Serves 5 people (numbers only)"
          borderColor="gray.400"
          bgColor="whiteAlpha.900"
          _placeholder={{ color: "gray.600", fontSize: "sm" }}
          onChange={onChange}
          onBlur={onBlur}
        />
      </ChakraNumberInput>
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};

export default NumberInput;
