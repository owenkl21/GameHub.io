import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from './../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={{ lg: '430px' }}>
      <Image
        borderTopRadius={10}
        height={{ lg: '320px' }}
        objectFit={'cover'}
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardBody alignContent={'start'}>
        <HStack mb={3} justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading mb={2} textAlign={'left'} fontSize="2xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
