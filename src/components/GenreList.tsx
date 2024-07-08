import {
  VStack,
  Button,
  Image,
  List,
  ListItem,
  HStack,
  Heading,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';
import GenreLoader from './GenreLoader';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  return (
    <VStack m={1} align={'start'}>
      {error && ''}
      {isLoading && <GenreLoader />}
      <Heading fontSize={'2xl'}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="36px"
                borderRadius={8}
                objectFit={'cover'}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant={'link'}
                fontSize={'lg'}
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                onClick={() => {
                  onSelectedGenre(genre);
                  console.log(genre);
                }}
              >
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
