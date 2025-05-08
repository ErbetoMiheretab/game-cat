import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import {SiNintendo} 'react-icons/si'
import {MdPhoneIphone} from 'react-icons/md'
import {BsGlobe} 'react-icons/bs'

import type { Platform } from "@/hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: {[key:string]: IconType}={
        pc:FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
