import { Fragment, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import { BsPencilSquare, BsTrash, BsPlusCircleFill } from "react-icons/bs";
import TextInput from "./inputs/TextInput";
import TextArea from "./inputs/TextArea";

const CommandsList = ({
  listType /* Can be "ingredients" || "steps". */,
  listValues,
  currInputValue,
  currInputErrorMsg,
  onChangeCurrInput,
  onBlurCurrInput,
  handleAddToList,
  handleEditInList,
  handleDeleteFromList,
}) => {
  const [commandInEditMode, setCommandInEditMode] = useState({
    index: null,
    value: null,
  });

  const handleOnChangeCommandInEditMode = (event) => {
    setCommandInEditMode((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
  };

  const handleFinishEditingCommandInList = () => {
    handleEditInList(
      commandInEditMode.index,
      commandInEditMode.value,
      listType
    );
    setCommandInEditMode({ index: null, value: null });
  };

  return (
    <Box borderBottom="1px" borderColor="gray.400" pb={4}>
      <Heading as="h6" size="sm" mb={4} textTransform="capitalize">
        Recipe {(listType === "steps" && "Procedures") || listType}
      </Heading>

      {listValues.length === 0 && (
        <Text fontSize="xs" fontStyle="italic">
          Start adding from the input below ...
        </Text>
      )}

      <OrderedList spacing={1} mb={4} wordBreak="break-word">
        {listValues.map((item, index) => {
          return (
            <Fragment key={index}>
              <Flex alignItems="center">
                <ListItem
                  flexGrow={1}
                  borderRadius="sm"
                  px={2}
                  py={1}
                  bgColor="gray.200"
                >
                  {item}
                </ListItem>

                {/* If item is not being edited, show the edit button. */}
                {commandInEditMode.index !== index && (
                  <IconButton
                    colorScheme="teal"
                    size="sm"
                    variant="ghost"
                    aria-label={`Edit ${listType}`}
                    icon={<Icon as={BsPencilSquare} boxSize={5} />}
                    onClick={() => setCommandInEditMode({ index, value: item })}
                  />
                )}

                <IconButton
                  colorScheme="red"
                  size="sm"
                  variant="ghost"
                  aria-label={`Delete ${listType}`}
                  icon={<Icon as={BsTrash} boxSize={4} />}
                  onClick={() => handleDeleteFromList(index, listType)}
                />
              </Flex>

              {/* If item is being edited, show the edit input. */}
              {commandInEditMode.index === index && (
                <Flex mb={4}>
                  <Box
                    as="input"
                    type="text"
                    flexGrow={1}
                    border="2px"
                    borderColor="teal.400"
                    borderRadius="sm"
                    p={2}
                    value={commandInEditMode.value}
                    onChange={handleOnChangeCommandInEditMode}
                  />
                  <Button
                    colorScheme="teal"
                    size="sm"
                    ml={1}
                    onClick={handleFinishEditingCommandInList}
                  >
                    Done
                  </Button>
                </Flex>
              )}
            </Fragment>
          );
        })}
      </OrderedList>

      <Box maxW="container.sm">
        {/* Normal text input in case of adding an ingredient. */}
        {listType === "ingredients" && (
          <TextInput
            label="Ingredient"
            placeholder="1 loaf ciabatta (max. 500 characters)"
            value={currInputValue}
            errorMsg={currInputErrorMsg}
            onChange={onChangeCurrInput}
            onBlur={onBlurCurrInput}
          />
        )}

        {/* Textarea in case of adding a step procedure. */}
        {listType === "steps" && (
          <TextArea
            label="Procedure"
            placeholder="Do ... (max. 1000 characters)"
            value={currInputValue}
            errorMsg={currInputErrorMsg}
            onChange={onChangeCurrInput}
            onBlur={onBlurCurrInput}
          />
        )}

        <Button
          colorScheme="brand"
          size="md"
          variant="ghost"
          leftIcon={<BsPlusCircleFill />}
          mt={2}
          onClick={() => handleAddToList(listType)}
        >
          Add More
        </Button>
      </Box>
    </Box>
  );
};

export default CommandsList;
