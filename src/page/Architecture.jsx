import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  StackDivider,
  Text,
  UnorderedList
} from '@chakra-ui/react';

function MyText({ style, content }) {
  return (
    <Text pt="2" style={style}>
      {content}
    </Text>
  );
}

function MyHeader({ content }) {
  return (
    <Heading size="xs" textTransform="uppercase">
      {content}
    </Heading>
  );
}

function Reference({ title, link, content }) {
  return (
    <Flex gap=".5rem">
      <Text>{title}</Text>
      <Link color="blue.600" href={link}>
        {content}
      </Link>
    </Flex>
  );
}

function Note() {
  return (
    <Box gap={1} mt="1rem">
      <Text fontWeight="bold" fontStyle="italic">
        note:
      </Text>
      <Text fontStyle="italic">
        You can see I was copied a lot from a website, don&apos;t worry I&apos;ve read them. I got more experience about
        architecture component in react and my skill english
      </Text>
      <Text fontStyle="italic">
        I may not be entirely sure of what I have read. Can you give me some advice to secure my knowledge.
      </Text>
      <Text>Thank you!</Text>
    </Box>
  );
}

function Reuse() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Reuse</Heading>
      </CardHeader>

      <Box p="0 20px">
        <MyText content="You can split a component into multiple smaller components to have a more readable and maintanable design and/or to achieve reuse." />
        <MyText content="But how do you know what should be its own component?" />
        <MyText content="Here are some questions to ask yourself when determining when to create another component:" />
      </Box>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <MyHeader content="architecture component in reactjs" />
            <MyText content="If yes, construction of a new component seems like a great idea. Even if the reuse is within a single component." />
          </Box>

          <Box>
            <MyHeader content="Is your code quite complex?" />
            <MyText content="If yes maybe its good idea to split in separate components in order to make your code more readable and maintainable." />
          </Box>

          <Box>
            <MyHeader content="Software Design" />
            <MyText content="In general, just use the same techniques for deciding if you should create a new function or object." />
            <MyText content="One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents." />
          </Box>

          <Box>
            <Heading size="xs" textTransform="uppercase">
              After you create more components, more questions arise such as:
            </Heading>

            <MyText content="How should components interact? (Component Communication)" />
            <MyText content="Are there any design patterns I should follow when creating components? (Lifting State Up, Composition vs Inheritance)" />
            <MyText content="What types of components are there? (Container vs. Presentation)" />
            <MyText content="How do I make my components reusable?" />

            <UnorderedList p="1rem 0">
              <ListItem>How should components interact? (Component Communication)</ListItem>
              <ListItem>
                Are there any design patterns I should follow when creating components? (Lifting State Up, Composition
                vs Inheritance)
              </ListItem>
              <ListItem>What types of components are there? (Container vs. Presentation)</ListItem>
              <ListItem>How do I make my components reusable?</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
        <MyText style={{ margintop: '1rem' }} content="This section explores each of those questions." />
      </CardBody>
    </Card>
  );
}

function ComponentCommunication() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Component Communication</Heading>
      </CardHeader>

      <Box p="0 20px">
        <MyText content="How should components interact?" />
      </Box>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <MyHeader content="Common Communication Patterns" />
            <MyText content="Component commonly communicate in these ways: Parent to Child & Child to Parent" />
          </Box>

          <Box>
            <MyHeader content="Additional Communication Patterns" />
            <MyText content='Now that you understand how this communication works in practice then we can explore these additional communication patterns which are essentially variations on "Parent to Child" and "Child to Parent"' />

            <UnorderedList p="1rem 0">
              <ListItem>Child to Child (siblings)</ListItem>
              <ListItem>Grandparent to Grandchild</ListItem>
              <ListItem>Grandchild to Parent</ListItem>
            </UnorderedList>

            <MyText content="Essentially, communication doesn't skip generations so if it is going to happen you need to manually communicate up or down between each generation." />

            <MyText
              style={{
                backgroundColor: '#1989b9a0',
                padding: '.3rem',
                marginTop: '1rem'
              }}
              content="Component communication does not work like JavaScript events...there is no event bubbling"
            />
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function LiftingStateUp() {
  return (
    <Card mt="1rem">
      <CardHeader>
        <Heading size="lg">Lifting State Up</Heading>
      </CardHeader>

      <Box p="0 20px">
        <Text>
          Often, several components need to reflect the same changing data. We recommend lifting the shared state up to
          their closest common ancestor.
        </Text>
      </Box>

      <Box p="20px" bgColor="#F7F7F7" m="0 20px 0">
        <Text>The React documentation summarizes it best:</Text>

        <Box m="1rem 0" p="0 1rem" borderLeft="2px solid #B2B2B2">
          <Text>
            There should be a single “source of truth” for any data that changes in a React application. Usually, the
            state is first added to the component that needs it for rendering. Then, if other components also need it,
            you can lift it up to their closest common ancestor. Instead of trying to sync the state between different
            components, you should rely on the top-down data flow.
          </Text>
        </Box>

        <Box m="1rem 0" p="0 1rem" borderLeft="2px solid #B2B2B2">
          <Text>
            Lifting state involves writing more “boilerplate” code than two-way binding approaches, but as a benefit, it
            takes less work to find and isolate bugs. Since any state “lives” in some component and that component alone
            can change it, the surface area for bugs is greatly reduced. Additionally, you can implement any custom
            logic to reject or transform user input.
          </Text>
        </Box>

        <Box m="1rem 0" p="0 1rem" borderLeft="2px solid #B2B2B2">
          <Text>If something can be derived from either props or state, it probably shouldn’t be in the state.</Text>
        </Box>
      </Box>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box />
        </Stack>
      </CardBody>
    </Card>
  );
}

function ContainerAndPresentationComponents() {
  return (
    <Card mt="1rem">
      <CardHeader>
        <Heading size="lg">Container and Presentation Components</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <MyHeader content="Container (Smart) Components" />

            <UnorderedList p="1rem 0">
              <ListItem>Are concerned with how things work</ListItem>
              <ListItem>Provide the data and behavior to presentational or other container components</ListItem>
              <ListItem>Loads and modifies data via calls to an API</ListItem>
              <ListItem>
                May contain both presentational and container components** inside but usually don’t have any DOM markup
                of their own except for some wrapping divs, and never have any styles
              </ListItem>
              <ListItem>Also know as container components or controller components</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <MyHeader content="Presentation Components" />

            <UnorderedList p="1rem 0">
              <ListItem>Are concerned with how things look</ListItem>
              <ListItem>Receive data and callbacks exclusively via props</ListItem>
              <ListItem>Don’t specify how the data is loaded or changed</ListItem>
              <ListItem>Also know as pure components or dumb components</ListItem>
            </UnorderedList>
          </Box>

          <Box>
            <Text>
              Until Recently when React introduced Hooks seems like almost every component eventually needed state so
              people tended to just create class components by default. In reality, it&apos;s not one or the
              other...often components are a blend of both. Just be aware the more stateful they become the harder they
              are to test and reuse but reuse often comes at a cost of complexity.
            </Text>
          </Box>

          <Box>
            <Text>
              Often my presentation components aren&apos;t pure presentation components, they have some state
              particularly local form state.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function CompositionVsInheritance() {
  const codeStyle = {
    color: 'blue'
  };
  return (
    <Card mt="1rem">
      <CardHeader>
        <Heading size="lg">Composition vs Inheritance</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text>React recommends using composition instead of inheritance to reuse code between components.</Text>
          </Box>

          <Box>
            <Text>
              In general, components can be nested inside other components or live next to other components just like in
              HTML where a <code style={codeStyle}>{`<div>`}</code> can have a <code style={codeStyle}>{`<p>`}</code>{' '}
              inside of it and the <code style={codeStyle}>{`<p>`}</code> can have an{' '}
              <code style={codeStyle}>{`<a>`}</code> and an <code style={codeStyle}>{`<img>`}</code>. HTML works on
              composition so React components work on composition as they are essentially HTML tags you invented.
            </Text>
          </Box>

          <Box p="20px" bgColor="#F7F7F7">
            <Text>The React documentation summarizes it best:</Text>

            <Box m="1rem 0" p="0 1rem" borderLeft="2px solid #B2B2B2">
              <Text>
                We use React in thousands of components, and we haven’t found any use cases where we would recommend
                creating component inheritance hierarchies. - Facebook
              </Text>
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function ThinkingInReact() {
  return (
    <Card mt="1rem">
      <CardHeader>
        <Heading size="lg">Thinking In React</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text>Here are some steps you might find useful as you learn to Think in React</Text>
          </Box>
          <Box>
            <OrderedList>
              <ListItem>Break the UI Into a Component Hierarchy</ListItem>

              <ListItem>Build a Static Version in React</ListItem>
              <UnorderedList>
                <ListItem>No State or Props</ListItem>
              </UnorderedList>

              <ListItem>Identify The Minimal (but complete) Representation Of UI State</ListItem>
              <UnorderedList>
                <ListItem>For each piece of state in your application:</ListItem>
                <UnorderedList>
                  <ListItem>Identify every component that renders something based on that state.</ListItem>
                  <ListItem>
                    Find a common owner component (a single component above all the components that need the state in
                    the hierarchy).
                  </ListItem>
                  <ListItem>
                    Either the common owner or another component higher up in the hierarchy should own the state.
                  </ListItem>
                  <ListItem>
                    If you can’t find a component where it makes sense to own the state, create a new component simply
                    for holding the state and add it somewhere in the hierarchy above the common owner component.
                  </ListItem>
                </UnorderedList>
              </UnorderedList>

              <ListItem>Identify Where Your State Should Live</ListItem>

              <ListItem>Add Inverse Data Flow</ListItem>
              <UnorderedList>
                <ListItem>Rendering the screen initially involves props and state flowing down the hierarchy</ListItem>
                <ListItem>
                  Inverse data flow refers to components deep in the hierarchy responding to user actions (clicking a
                  button, hovering, typing) and then updating the state in the higher container component(s)
                </ListItem>
              </UnorderedList>
            </OrderedList>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function Architecture() {
  return (
    <Box p={{ base: '0', md: '1rem' }}>
      <Heading size="lg">Architecture Component</Heading>
      <Box pt="1rem">
        <Reference
          title="Reference 1:"
          link="https://handsonreact.com/docs/component-architecture#reuse"
          content="Architecture Component in hands on react"
        />

        <Reference
          title="Reference 2:"
          link="https://medium0.com/@vaqifagayev/react-component-architecture-design-8f5528c8254c"
          content="React Component Architecture Design"
        />

        <Note />
      </Box>

      <Reuse />
      <ComponentCommunication />
      <LiftingStateUp />
      <ContainerAndPresentationComponents />
      <CompositionVsInheritance />
      <ThinkingInReact />
    </Box>
  );
}
