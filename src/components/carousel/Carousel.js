import { useEffect, useState } from "react";
import { Box, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import CarouselItem from "./CarouselItem";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = data;

  const nextSlide = () => {
    if (+currentSlide + 1 >= carouselData.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevState) => +prevState + 1);
    }
  };

  useEffect(() => {
    let timerId = setInterval(nextSlide, 4000);

    return function () {
      clearInterval(timerId);
    };
  });

  return (
    <Box
      as="section"
      pos="relative"
      h={{ base: "100vw", md: "50vw" }}
      maxH="md"
      boxShadow="md"
      border="2px"
      borderColor="gray.200"
      borderRadius="md"
      bgColor="white"
      overflow="hidden"
    >
      <Box pos="relative" w="full" h="full">
        {carouselData.map((recipe, index) => (
          <CarouselItem
            key={recipe._id}
            slideData={recipe}
            currentSlide={currentSlide}
            index={index}
          />
        ))}

        <RadioGroup
          colorScheme="brand"
          pos="absolute"
          left="50%"
          bottom={6}
          /* Must be higher than the number of slide images but not higher than the z-index of the header. */
          zIndex="9"
          transform="translateX(-50%)"
          onChange={setCurrentSlide}
          value={+currentSlide}
        >
          <HStack>
            {carouselData.map((d, index) => (
              <Radio key={d._id} value={+index}></Radio>
            ))}
          </HStack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Carousel;
