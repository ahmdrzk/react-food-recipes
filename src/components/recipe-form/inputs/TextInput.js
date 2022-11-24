import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { convertStrToId } from "../../../helpers/stringHelpers";

const TextInput = ({
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
      <Input
        id={id}
        type="text"
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

export default TextInput;
