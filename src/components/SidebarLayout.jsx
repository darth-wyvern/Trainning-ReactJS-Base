import { Flex } from '@chakra-ui/react';

export default function SidebarLayout() {
  return (
    <Flex
      flexDir="column"
      bgColor="#222831"
      p=".5rem"
      display={{ base: 'none', md: 'flex' }}
      w="180px"
      pos="sticky"
      left="0"
      top="0">
      Sidebar
    </Flex>
  );
}
