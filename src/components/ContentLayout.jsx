import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export default function ContentLayout() {
  return (
    <Flex bgColor="#222831" m={{ base: 0, md: '2rem', lg: '2rem 12rem' }}>
      <Flex w="100%" border={{ base: 'none', md: '1px solid #EEEEEE' }} flex={1}>
        <Box flex={3} p="1rem">
          <Outlet />
        </Box>
        <Box flex={1} bgColor="#22222277" p="1rem" pos="sticky" top={0} display={{ base: 'none', md: 'block' }} />
      </Flex>
    </Flex>
  );
}
