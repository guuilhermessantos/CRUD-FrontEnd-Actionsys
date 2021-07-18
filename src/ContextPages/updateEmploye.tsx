import React, { createContext, useContext, useState } from "react";
interface IEmployeeUP {
  nome: string;
  email: string;
  dataNascimento: string;
  dataAdmissao: string;
  nivel: string;
  setor: string;
  cargo: string;
  id: number;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setDatanascimento: React.Dispatch<React.SetStateAction<string>>;
  setDataadmissao: React.Dispatch<React.SetStateAction<string>>;
  setNivel: React.Dispatch<React.SetStateAction<string>>;
  setSetor: React.Dispatch<React.SetStateAction<string>>;
  setCargo: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const UpdateEmploye = createContext({});
export default function CupomProvider({ children }: any) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDatanascimento] = useState("");
  const [dataAdmissao, setDataadmissao] = useState("");
  const [nivel, setNivel] = useState("");
  const [setor, setSetor] = useState("");
  const [cargo, setCargo] = useState("");
  const [id, setId] = useState(0);
  
  return (
    <UpdateEmploye.Provider
      value={{
        nome,
        setNome,
        email,
        setEmail,
        dataNascimento,
        setDatanascimento,
        dataAdmissao,
        setDataadmissao,
        nivel,
        setNivel,
        setor,
        setSetor,
        cargo,
        setCargo,
        id,
        setId,
      }}
    >
      {children}
    </UpdateEmploye.Provider>
  );
}
export function useUpdate() {
  const context = useContext(UpdateEmploye) as IEmployeeUP;
  const { nome, setNome } = context;
  const { email, setEmail } = context;
  const { dataNascimento, setDatanascimento } = context;
  const { dataAdmissao, setDataadmissao } = context;
  const { nivel, setNivel } = context;
  const { setor, setSetor } = context;
  const { cargo, setCargo } = context;
  const { id, setId } = context;

  if (!context) {
    throw new Error("useCupom must be used whitin a CupomProvider");
  }

  return context;
}