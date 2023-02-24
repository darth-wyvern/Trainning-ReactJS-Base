import React from 'react';
import { Stack, Box, Card, CardBody, Heading, StackDivider, Text, Flex } from '@chakra-ui/react';

export default function State() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">State</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              In React, a state is a JavaScript object that represents the current condition or data of a component.
              It&apos;s used to keep track of data that may change over time, such as user input or the results of an
              API call.
            </Text>

            <Text>
              State is managed within a component using the useState hook, which is included in React. To use the
              useState hook, you declare a variable to hold the state value and a function to update that value. The
              function is conventionally named set followed by the state variable name.
            </Text>

            <Flex flexDir="column">
              <Text>Here&apos;s an example of using the useState hook to manage state in a React component:</Text>
              <Box bgColor="#000" color="white" p="1rem" mt="1rem" overflow="auto">
                <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleIncrement}>
        Click me
      </button>
    </div>
  );
}
`}</pre>
              </Box>
            </Flex>
            <Text>
              In this example, count is the state variable, and setCount is the function used to update it. The useState
              hook is called with an initial value of 0 for the count variable. When the button is clicked, the
              handleIncrement function is called, which calls setCount to update the count variable with a new value.
              This causes the component to re-render with the updated state value.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
