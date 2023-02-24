import { Box, Flex, Heading, Text, Card, CardBody, Stack, StackDivider, OrderedList, ListItem } from '@chakra-ui/react';

export default function ServerRendering() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Server Rendering</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              Server rendering, also known as server-side rendering (SSR), is the process of rendering a React
              application on the server instead of in the browser. This means that the initial HTML content is generated
              on the server and sent to the browser, where it is then hydrated into a fully functioning React
              application.
            </Text>

            <Flex flexDir="column">
              Server rendering has several benefits, including:
              <OrderedList>
                <ListItem>
                  <Box>
                    <Text>
                      Faster initial loading times: By rendering the initial HTML content on the server and sending it
                      to the browser, the user can see the content more quickly than if they had to wait for the
                      JavaScript to load and render the content in the browser.
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Better search engine optimization (SEO): Since search engine bots typically don&apos;t execute
                      JavaScript, server rendering allows them to see the fully rendered content and index it properly,
                      which can improve the SEO of the application.
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Improved accessibility: Server rendering ensures that the initial HTML content is accessible to
                      all users, including those who use assistive technologies like screen readers.
                    </Text>
                  </Box>
                </ListItem>
              </OrderedList>
            </Flex>

            <Flex flexDir="column">
              To implement server rendering in a React application, there are several steps involved:
              <OrderedList>
                <ListItem>
                  <Box>
                    <Text>
                      Set up a Node.js server: A Node.js server is required to run the React application on the server.
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Create a server-side entry point: This is a separate entry point file that is used by the server
                      to render the application. It typically imports the main React component and renders it to a
                      string using a library like ReactDOMServer.
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Render the application on the server: The server-side entry point is called by the server, and the
                      rendered HTML string is sent to the browser in the initial response.
                    </Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Hydrate the application in the browser: When the browser receives the HTML content, it is then
                      hydrated into a fully functioning React application using the same main React component that was
                      used on the server.
                    </Text>
                  </Box>
                </ListItem>
              </OrderedList>
            </Flex>

            <Text>
              To simplify the process of implementing server rendering in a React application, there are several
              libraries and frameworks available, including Next.js and Gatsby. These provide pre-configured setups for
              server rendering and other features like automatic code splitting and optimized image loading.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
