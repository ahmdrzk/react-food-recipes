import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";

import { convertStrToId } from "../../../helpers/stringHelpers";

const SelectInput = ({
  label,
  placeholder,
  options,
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
      <Select
        id={id}
        placeholder={placeholder}
        borderColor="gray.400"
        bgColor="whiteAlpha.900"
        _placeholder={{ color: "gray.600", fontSize: "sm" }}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Select>
      <FormErrorMessage>{errorMsg}</FormErrorMessage>
    </FormControl>
  );
};

export default SelectInput;
