import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IUsers } from "../../interface";
import usersUrl from "../../api/api-instance";

export default function UsersDisplay() {
  const [users, setUsers] = useState<IUsers[]>([]);

  const fetchData = async () => {
    const { data } = await usersUrl.get("users");
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
