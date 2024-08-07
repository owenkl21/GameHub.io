import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Platform } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
  selectedOrder: string;
  searchedGame: string;
}
const GameGrid = ({
  selectedGenre,
  selectedPlatform,
  selectedOrder,
  searchedGame,
}: Props) => {
  const { data, error, isLoading } = useGames(
    selectedGenre,
    selectedPlatform,
    selectedOrder,
    searchedGame
  );
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        padding={'10px'}
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={6}
      >
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))
          : data.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
