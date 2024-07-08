import './App.css';
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedOrder, setSelectedOrder] = useState<string>('');
  const [searchedGame, setSearchedGame] = useState<string>('');

  return (
    <>
      <Grid
        overflowY={'scroll'}
        w={'100vw'}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '280px 1fr',
        }}
      >
        <GridItem area={'nav'}>
          <NavBar onSearch={(search) => setSearchedGame(search)} />
        </GridItem>
        <Show above="lg">
          <GridItem paddingX={5} area={'aside'}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectedGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
          <HStack spacing={5} paddingLeft={2.5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => {
                setSelectedPlatform(platform);
                console.log(platform);
              }}
            />
            <SortSelector
              onSelectSortOrder={(order) => {
                setSelectedOrder(order);
                console.log(order);
              }}
            />
          </HStack>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
            selectedOrder={selectedOrder}
            searchedGame={searchedGame}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
