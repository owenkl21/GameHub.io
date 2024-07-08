import { Heading, Box } from '@chakra-ui/react';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/useGames';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameHeading = ({ selectedGenre, selectedPlatform }: Props) => {
  const heading = `${selectedGenre?.name || ''} ${
    selectedPlatform?.name || ''
  } Games`;

  return (
    <Box ml={2.5} mb={5} textAlign={'left'}>
      <Heading as="h1" fontSize="4xl">
        {heading}
      </Heading>
    </Box>
  );
};

export default GameHeading;
