import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './colorModeSwitch';
const NavBar = () => {
  return (
    <HStack padding={'10px 10px 10px 0'} justifyContent={'space-between'}>
      <Image boxSize={'60px'} src={logo} />
      <Text> NavBar</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
