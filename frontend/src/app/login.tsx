import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data
      );
      login(response.data);
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Usuário" />
      <input {...register("password")} type="password" placeholder="Senha" />
      <button type="submit">Login</button>
    </form>
  );
}
