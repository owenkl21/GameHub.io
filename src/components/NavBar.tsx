import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './colorModeSwitch';
import SearchBar from './SearchBar';

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={'10px 10px 10px 0'} justifyContent={'space-between'}>
      <Image boxSize={'60px'} src={logo} />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
