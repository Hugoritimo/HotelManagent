import { useToast } from "@chakra-ui/react";

const toast = useToast();

const handleSubmit = async (data) => {
  try {
    await axios.post("http://localhost:3000/guests", data);
    toast({
      title: "Hóspede cadastrado com sucesso.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  } catch (error) {
    toast({
      title: "Erro ao cadastrar hóspede.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
  }
};
