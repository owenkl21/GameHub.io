import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './colorModeSwitch';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <HStack padding={'10px 10px 10px 0'} justifyContent={'space-between'}>
      <Image boxSize={'60px'} src={logo} />
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
