import React from 'react';
import { Stack, Box, Card, CardBody, Heading, StackDivider, Text, OrderedList, ListItem } from '@chakra-ui/react';

export default function Style() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Style</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              In React, there are several ways to apply styles to components. Here are some of the most common
              approaches:
            </Text>
            <OrderedList>
              <ListItem>
                <Box>
                  <Text>
                    Inline styles: Inline styles allow you to define styles directly within a component&apos;s JSX. To
                    use inline styles, you can pass a JavaScript object with style properties and values as the style
                    prop of the component.
                  </Text>
                  <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                    <pre>{`function MyComponent() {
  const styles = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: '20px'
  };

  return <div style={styles}>Hello World!</div>;
}
`}</pre>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box>
                  <Text>
                    CSS Modules: CSS Modules is a way to write modular CSS for React components. With CSS Modules, each
                    CSS file is treated as a separate module, and class names are scoped locally to the module. To use
                    CSS Modules, you can import a CSS file into your component and apply the styles using the imported
                    class names.
                  </Text>
                  <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                    <pre>{`import styles from './MyComponent.module.css';

function MyComponent() {
  return <div className={styles.myClass}>Hello World!</div>;
}
`}</pre>
                  </Box>
                </Box>
              </ListItem>
              <ListItem>
                <Box>
                  <Text>
                    Styled components: Styled components is a popular library for writing CSS-in-JS. With styled
                    components, you can define a component&apos;s styles using a template literal syntax and create
                    reusable styled components that can be used throughout your application.
                  </Text>
                  <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                    <pre>{`import styled from 'styled-components';

const MyComponent = styled.div'
  background-color: red;
  color: white;
  font-size: 20px;
';

function App() {
  return <MyComponent>Hello World!</MyComponent>;
}
`}</pre>
                  </Box>
                </Box>
              </ListItem>
            </OrderedList>
            <Text>
              These are just a few examples of how to apply styles to components in React. The approach you choose may
              depend on your project&apos;s needs, team preferences, and personal style.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
