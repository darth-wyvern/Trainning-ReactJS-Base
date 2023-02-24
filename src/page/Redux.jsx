import { Box, Flex, Heading, Text, Card, CardBody, Stack, StackDivider, OrderedList, ListItem } from '@chakra-ui/react';

export default function Redux() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Redux</Heading>
      <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Text>
              Redux is a state management library for JavaScript applications, including those built with React. Redux
              provides a way to manage global application state and makes it easy to reason about changes to that state.
              It can be used with any UI library, but it&apos;s commonly used with React.
            </Text>

            <Text>
              Redux works by maintaining a single source of truth for the application state, known as the
              &quot;store&quot;. The store is a plain JavaScript object that holds the current state of the application.
              Changes to the store can only be made by dispatching &quot;actions&quot;, which are plain JavaScript
              objects that describe the changes to be made. Reducers are functions that take the current state and an
              action and return a new state based on the action.
            </Text>

            <Flex flexDir="column">
              Here an example of how Redux might be used in a React application:
              <OrderedList>
                <ListItem>
                  <Box>
                    <Text>
                      Define the store: The store is created using the createStore function from the redux library. The
                      store is defined in its own file, and is typically composed of multiple reducers that each handle
                      a specific part of the state.
                    </Text>
                    <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer
});

const store = createStore(rootReducer);
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Connect components to the store: The connect function from the react-redux library is used to
                      connect a component to the store. This provides the component with access to the store state and
                      allows it to dispatch actions to update the state.
                    </Text>
                    <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`import { connect } from 'react-redux';

function MyComponent({ counter, dispatch }) {
  function incrementCounter() {
    dispatch({ type: 'INCREMENT_COUNTER' });
  }

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(MyComponent);
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box>
                    <Text>
                      Define actions and reducers: Actions are defined as plain JavaScript objects that describe the
                      changes to be made to the state. Reducers are functions that take the current state and an action
                      and return a new state based on the action.
                    </Text>
                    <Box bgColor="#000" color="white" p="1rem" mt="1rem" flex={1} overflow="auto" mb=".5rem">
                      <pre
                        style={{
                          whiteSpace: 'pre-wrap',
                          wordWrap: 'break-word'
                        }}>{`// actions.js
export const incrementCounter = () => ({
  type: 'INCREMENT_COUNTER'
});

// counterReducer.js
const initialState = 0;

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    default:
      return state;
  }
}

export default counterReducer;
`}</pre>
                    </Box>
                  </Box>
                </ListItem>
              </OrderedList>
            </Flex>
            <Text>
              These are just a few examples of how Redux might be used in a React application. Redux provides a powerful
              and flexible way to manage global application state and can be used with any UI library.
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
