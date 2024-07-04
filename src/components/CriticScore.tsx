import { Badge } from '@chakra-ui/react';
import { color } from 'framer-motion';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 80 ? 'green' : score > 50 ? 'yellow' : 'red';
  return (
    <Badge
      fontSize={'14px'}
      borderRadius={4}
      paddingX={2}
      ml="1"
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
