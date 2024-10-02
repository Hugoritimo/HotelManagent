"use client";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import PrivateRoute from "./PrivateRoute";

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <PrivateRoute>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Nome</FormLabel>
          <Input
            {...register("name", { required: true })}
            placeholder="Seu nome"
          />
          {errors.name && <span>O nome é obrigatório</span>}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", { required: true })}
            placeholder="Seu email"
          />
          {errors.email && <span>O email é obrigatório</span>}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Check-in</FormLabel>
          <Input {...register("checkin", { required: true })} type="date" />
          {errors.checkin && <span>A data de check-in é obrigatória</span>}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Check-out</FormLabel>
          <Input {...register("checkout", { required: true })} type="date" />
          {errors.checkout && <span>A data de check-out é obrigatória</span>}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Número de Hóspedes</FormLabel>
          <Input
            {...register("guests", { required: true })}
            type="number"
            min="1"
          />
          {errors.guests && <span>O número de hóspedes é obrigatório</span>}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Tipo de Quarto</FormLabel>
          <Select {...register("roomType", { required: true })}>
            <option value="single">Solteiro</option>
            <option value="double">Duplo</option>
            <option value="suite">Suíte</option>
          </Select>
          {errors.roomType && <span>O tipo de quarto é obrigatório</span>}
        </FormControl>

        <Button mt={4} type="submit">
          Reservar
        </Button>
      </form>
    </PrivateRoute>
  );
}
