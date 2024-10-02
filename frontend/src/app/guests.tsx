import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tbody, Tr, Td, Th, Button } from "@chakra-ui/react";

export default function Guests() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/guests").then((response) => {
      setGuests(response.data);
    });
  }, []);

  return (
    <Table>
      <Tbody>
        {guests.map((guest) => (
          <Tr key={guest.id}>
            <Td>{guest.name}</Td>
            <Td>{guest.email}</Td>
            <Td>
              <Button colorScheme="red">Excluir</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
