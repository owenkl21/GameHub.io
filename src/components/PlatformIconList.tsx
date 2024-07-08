import { Platform } from '../hooks/useGames';
import { Icon, HStack } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <>
      <HStack>
        {platforms.map((platform) => (
          <Icon
            key={platform.slug}
            boxSize={5}
            color={'gray.400'}
            as={iconMap[platform.slug]}
          ></Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
