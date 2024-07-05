import { VStack, Text, Image, List, ListItem, HStack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <VStack m={2} align={'start'}>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}

      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="36px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize={'lg'}>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
