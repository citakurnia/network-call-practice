import { Flex, Spacer, HStack, Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const bgCol = "pink";
  return (
    <div>
      <Box
        as="header"
        position="fixed"
        width="100%"
        height="75px"
        backgroundColor={bgCol}
        zIndex="10"
        pl={20}
        pr={20}
        boxShadow="md"
        alignContent="center"
      >
        <Flex as="nav" alignItems="center" width="100%">
          <Box>
            <Heading as="h2" fontSize="24px">
              Network Call Practice
            </Heading>
          </Box>
          <Spacer />
          <HStack spacing="45px">
            <Box>
              <Link to="/">
                <b>Users</b>
              </Link>
            </Box>
            <Box>
              <Link to="/regist-page">
                <b>Register Here!</b>
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </div>
  );
}
