import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IUsers } from "../../interface";

export default function UsersDisplay({ users }: { users: IUsers[] }) {
  return (
    <>
      <Box position="relative" height="100vh" pt="100px" pl={10} pr={10}>
        <Table variant="simple" width="80%" margin="0 auto">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Password</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.length > 0 &&
              users.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.password}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
}
