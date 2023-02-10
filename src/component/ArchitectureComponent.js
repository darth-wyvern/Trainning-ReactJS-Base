import React from "react"
import { Box, Card, CardBody, CardHeader, Flex, Heading, Link, ListItem, Stack, StackDivider, Text, UnorderedList } from "@chakra-ui/react"

export default function ArchitectureComponent() {

  const MyText = ({ style, content }) => {
    return (
      <Text pt='2' fontSize='sm' style={style}>{content}</Text>
    )
  }

  const MyHeader = ({ content }) => {
    return (
      <Heading size='xs' textTransform='uppercase'>{content}</Heading>
    )
  }

  return (
    <Box p='20px 1rem'>
      <Heading>Architecture Component</Heading>
      <Box p='1rem'>
        <Text>References 1:
          <Link color='blue.600' href='https://handsonreact.com/docs/component-architecture#reuse'> Architecture Component in hands on react</Link>
        </Text>

        <Text>References 2:
          <Link color='blue.600' href='https://medium0.com/@vaqifagayev/react-component-architecture-design-8f5528c8254c'> React Component Architecture Design</Link>
        </Text>

        <Box gap={1} mt='1rem'>
          <Text fontWeight='bold' fontStyle='italic'>note:</Text>
          <Text fontStyle='italic'>You can see I was copied a lot from a website, don't worry I've read them. I got more experience about architecture component in react and my skill english</Text>
          <Text fontStyle='italic'>I may not be entirely sure of what I have read. Can you give me some advice to secure my knowledge.</Text>
          <Text>Thank you!</Text>
        </Box>
      </Box>

      <Card m={4} boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);'>
        <CardHeader>
          <Heading size='lg'>Reuse</Heading>
        </CardHeader>

        <Box p='0 20px'>
          <MyText content='You can split a component into multiple smaller components to have a more readable and maintanable design and/or to achieve reuse.' />
          <MyText content='But how do you know what should be its own component?' />
          <MyText content='Here are some questions to ask yourself when determining when to create another component:' />
        </Box>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <MyHeader content='architecture component in reactjs' />
              <MyText content='If yes, construction of a new component seems like a great idea. Even if the reuse is within a single component.' />
            </Box>
            <Box>
              <MyHeader content='Is your code quite complex?' />
              <MyText content='If yes maybe its good idea to split in separate components in order to make your code more readable and maintainable.' />
            </Box>
            <Box>
              <MyHeader content='Software Design' />
              <MyText content='In general, just use the same techniques for deciding if you should create a new function or object.' />
              <MyText content='One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.' />
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                After you create more components, more questions arise such as:
              </Heading>
              <MyText content='How should components interact? (Component Communication)' />
              <MyText content='Are there any design patterns I should follow when creating components? (Lifting State Up, Composition vs Inheritance)' />
              <MyText content='What types of components are there? (Container vs. Presentation)' />
              <MyText content='How do I make my components reusable?' />
              <UnorderedList p='1rem 0'>
                <ListItem fontSize='sm'>How should components interact? (Component Communication)</ListItem>
                <ListItem fontSize='sm'>Are there any design patterns I should follow when creating components? (Lifting State Up, Composition vs Inheritance)</ListItem>
                <ListItem fontSize='sm'>What types of components are there? (Container vs. Presentation)</ListItem>
                <ListItem fontSize='sm'>How do I make my components reusable?</ListItem>
              </UnorderedList>
            </Box>
          </Stack>
          <MyText style={{ margintop: '1rem' }} content='This section explores each of those questions.' />
        </CardBody>
      </Card>

      <Card m={4} boxShadow='0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);'>
        <CardHeader>
          <MyHeader content='Component Communication' />
        </CardHeader>

        <Box p='0 20px'>
          <MyText content='How should components interact?' />
        </Box>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <MyHeader content='Common Communication Patterns' />
              <MyText content='Component commonly communicate in these ways: Parent to Child & Child to Parent' />
            </Box>
            <Box>
              <MyHeader content='Additional Communication Patterns' />
              <MyText content='Now that you understand how this communication works in practice then we can explore these additional communication patterns which are essentially variations on "Parent to Child" and "Child to Parent"' />
              <UnorderedList p='1rem 0'>
                <ListItem fontSize='sm'>Child to Child (siblings)</ListItem>
                <ListItem fontSize='sm'>Grandparent to Grandchild</ListItem>
                <ListItem fontSize='sm'>Grandchild to Parent</ListItem>
              </UnorderedList>
              <MyText content="Essentially, communication doesn't skip generations so if it is going to happen you need to manually communicate up or down between each generation." />
              <MyText style={{ backgroundColor: '#1989b9a0', padding: '.3rem', marginTop: '1rem' }} content="Component communication does not work like JavaScript events...there is no event bubbling" />
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>Lifting State Up</Heading>
        </CardHeader>

        <Box p="0 20px">
          <Text>Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.</Text>
        </Box>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>

            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>Container and Presentation Components</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>

            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>Composition vs Inheritance</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>

            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>Thinking in React</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>

            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  )
}