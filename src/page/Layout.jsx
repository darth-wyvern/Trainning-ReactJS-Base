import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Flex pos="fixed" inset={0} bgColor="#393E46" color="#EEEEEE">
      <Flex flexDir="column" bgColor="#222831" p=".5rem" display={{ base: 'none', md: 'flex' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/component-achitecture">Achitecture</Link>
        <Link to="/rendering">Rendering</Link>
      </Flex>
      <Flex bgColor="#222831" m={{ base: 0, md: '2rem', lg: '2rem 12rem' }} flex={1}>
        <Flex overflow="auto" w="100%" border={{ base: 'none', md: '1px solid #EEEEEE' }}>
          <Box flex={3} p="1rem">
            <Outlet />
          </Box>
          <Box flex={1} bgColor="#22222277" p="1rem" pos="sticky" top={0} display={{ base: 'none', md: 'block' }} />
        </Flex>
      </Flex>
    </Flex>
  );
}
