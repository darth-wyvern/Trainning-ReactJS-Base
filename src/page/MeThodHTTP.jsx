import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';

function GetMethod() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Get</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            The GET method is used to retrieve resources from a server. It is said to be a safe method as it does not
            change the state of the resource in any way. GET method is idempotent Thus calling this method multiple
            times will always give the same result.
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function PutMethod() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Put</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            PUT is used to update the existing resource on the server and it updates the full resource. If the resource
            does not exist, PUT may decide to create a new resource. PUT method is idempotent Thus calling this method
            multiple times will always update the same resource multiple times.
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function PatchMethod() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Patch</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            PATCH is used to update the existing resource on the server and it updates a portion of the resource. If the
            resource does not exist, PUT may decide to create a new resource. Just as the PUT method, PATCH is also
            idempotent
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function DeleteMethod() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Delete</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            DELETE Method is used to delete the resources from a server. It deletes resource identified by the
            Request-URI. DELETE method are idempotent.
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

function PostMethod() {
  return (
    <Card mt="1rem" boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.2);">
      <CardHeader>
        <Heading size="lg">Post</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>POST method is used to create a new resource into the collection of resources on a server.</Box>
          <Box bgColor="#F7F7F7">
            <Text>The React documentation summarizes it best:</Text>

            <Box m="1rem 0" p="0 1rem" borderLeft="2px solid #B2B2B2">
              <Text>
                It is important to note that POST is Non-idempotent. Thus invoking two identical POST requests will
                result in duplicate information being created on the server.
              </Text>
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default function ServerRendering() {
  return (
    <Box p={{ base: '0', md: '1rem' }} w="100%">
      <Heading size="lg">Methods HTTP</Heading>
      <GetMethod />
      <PostMethod />
      <PutMethod />
      <PatchMethod />
      <DeleteMethod />
    </Box>
  );
}
