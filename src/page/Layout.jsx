import React, { Suspense } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Spinner } from 'phosphor-react';
import HeaderLayout from '../components/HeaderLayout';
import SidebarLayout from '../components/SidebarLayout';
import ContentLayout from '../components/ContentLayout';

export default function Layout() {
  const route = [
    { path: '/', component: 'Dashboard' },
    { path: '/component-achitecture', component: 'Achitecture' },
    { path: '/state', component: 'State' },
    { path: '/props', component: 'Props' },
    { path: '/style', component: 'Style' },
    { path: '/hook', component: 'Hook' },
    { path: '/redux', component: 'Redux' },
    { path: '/method-http', component: 'Method HTTP' },
    { path: '/server-rendering', component: 'Server rendering' }
  ];

  return (
    <Flex pos="fixed" inset={0} bgColor="#393E46" color="#EEEEEE" flexDir="column">
      <HeaderLayout route={route} />
      <Flex flex="1" overflow="auto">
        <SidebarLayout />
        <Box w="100%" h="100%" overflow="auto">
          <Suspense fallback={<Spinner color="red.500" />}>
            <ContentLayout />
          </Suspense>
        </Box>
      </Flex>
    </Flex>
  );
}
