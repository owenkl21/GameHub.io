import { Spinner } from '@chakra-ui/react';

const GenreLoader = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="gray.600"
      size="xl"
    />
  );
};

export default GenreLoader;
