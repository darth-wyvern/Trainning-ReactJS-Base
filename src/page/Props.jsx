import { Box, Flex, Heading, Text, Card, CardBody, Stack, StackDivider } from '@chakra-ui/react';

export default function Props() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Props</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              In React, props (short for properties) are a way to pass data from a parent component to a child
              component. Props are read-only, meaning that a child component cannot modify the props it receives from
              its parent.
            </Text>

            <Flex flexDir="column">
              Here&apos;s an example of using props to pass data from a parent component to a child component:
              <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto">
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word'
                  }}>{`// Parent Component
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = "John Doe";
  const age = 25;

  return (
    <div>
      <ChildComponent name={name} age={age} />
    </div>
  );
}

// Child Component
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
`}</pre>
              </Box>
            </Flex>
            <Text>
              In this example, the ParentComponent passes two props name and age to the ChildComponent. The
              ChildComponent receives these props as an object named props and uses them to render the name and age of
              the person.
            </Text>
            <Text>
              Props can be used to pass any type of data to a child component, such as strings, numbers, objects,
              arrays, and even functions. They are a powerful tool for building reusable and composable components in
              React.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
