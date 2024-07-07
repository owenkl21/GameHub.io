import {
  VStack,
  Button,
  Image,
  List,
  ListItem,
  HStack,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';
import GenreLoader from './GenreLoader';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <VStack m={2} align={'start'}>
      {error && ''}
      {isLoading && <GenreLoader />}

      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="36px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button variant={'list'} fontSize={'lg'}>
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default GenreList;
