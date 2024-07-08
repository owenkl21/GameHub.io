import { Box, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      boxShadow={colorMode === 'light' ? 'lg' : 'lg'}
      borderRadius={10}
      overflow={'hidden'}
      transition="box-shadow 0.3s ease-in-out"
      _hover={{
        boxShadow: colorMode === 'light' ? 'dark-lg' : 'dark-lg',
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
