import { Box, Flex, Heading, Text, Card, CardBody, Stack, StackDivider, OrderedList, ListItem } from '@chakra-ui/react';

export default function Hook() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Hook</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              Hooks are a feature introduced in React 16.8 that allow you to use state and other React features in
              functional components. Previously, state could only be used in class components using the setState()
              method. Hooks provide a more functional way to write components by allowing you to reuse stateful logic
              between components.
            </Text>

            <Flex flexDir="column">
              Here are some of the most commonly used React Hooks:
              <OrderedList>
                <ListItem>
                  <Box>
                    <Text>
                      useState: useState is a Hook that allows you to add state to your functional components. It
                      returns an array containing the current state and a function to update the state. You can also
                      pass an initial state value to useState.
                    </Text>
                    <Box
                      bgColor="#000"
                      color="white"
                      p="1rem"
                      mt="1rem"
                      flex={1}
                      overflow="auto"
                      mb=".5rem"
                      w="fix-content">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount} >Increment</button>
    </div>
  );
}
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      useEffect: useEffect is a Hook that allows you to perform side effects in your components, such as
                      fetching data from an API or updating the DOM. It takes a function as input that will be called
                      after every render of the component. You can also specify dependencies for the effect to run only
                      when certain values have changed.
                    </Text>
                    <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(' https://api.example.com/data ')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <p>Data: {data}</p>;
}
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      useContext: useContext is a Hook that allows you to access data from a React context in your
                      components. It takes a context object as input and returns the current context value.
                    </Text>
                    <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`import React, { useContext } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const value = useContext(MyContext);

  return <p>Context value: {value}</p>;
}
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
              </OrderedList>
            </Flex>
            <Text>
              These are just a few examples of the many Hooks available in React. Hooks provide a powerful and flexible
              way to add state and other features to functional components.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
