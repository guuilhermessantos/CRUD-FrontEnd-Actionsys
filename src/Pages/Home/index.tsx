import { useUpdate } from "../../ContextPages/updateEmploye"
import  { useEffect, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "../Home/style.css"
interface IEmployee {
  id: number;
  nome: string;
  email: string;
  cargo: string;
  nivel: string;
  setor: string;
  data_nascimento: string;
  data_admissao: string;
}

function Home() {
   const { nome, setNome } = useUpdate();
  const { email, setEmail } = useUpdate();

  const { dataNascimento, setDatanascimento } = useUpdate();
  const { dataAdmissao, setDataadmissao } = useUpdate();
  const { cargo, setCargo } = useUpdate();
  const { setor, setSetor } = useUpdate();
  const { nivel, setNivel } = useUpdate();
  const { id, setId } = useUpdate();
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const history = useHistory();

  
  useEffect(() => {
    api.get(`funcionarios`).then((response) => {
      console.log(response.data);
      setEmployees(response.data);
      console.log("aqui", employees);
    });
  }, []);

  async function deleteEmployee(id: number) {
    try {
      const response = await api.delete(`funcionarios/${id}`);
      setEmployees((oldEmployees) =>
        oldEmployees.filter((employee) => employee.id !== id)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }



    function editEmployee(id: number) {
    setId(id);
    setNome(nome);
    setEmail(email);
    setDatanascimento(dataNascimento);
    setDataadmissao(dataAdmissao);
    setCargo(cargo);
    setSetor(setor);
    setNivel(nivel);
    console.log(nome);
    console.log(email);
    console.log(dataNascimento);
    console.log(dataAdmissao);

    history.push("/update");
  }

  function ViewEmployee(id: number) {
    setId(id);
    setNome(nome);
    setEmail(email);
    setDatanascimento(dataNascimento);
    setDataadmissao(dataAdmissao);
    setCargo(cargo);
    setSetor(setor);
    setNivel(nivel);
    console.log(nome);
    console.log(email);
    console.log(dataNascimento);
    console.log(dataAdmissao);

    history.push("/view");
  }
    
  
// console.log(nome)
  return (
    <div className="App">
      <div className="HeaderPainel">
        <h3 id="logo">Actionsys</h3>
      </div>
      <span id="TitleGrid"> Painel de controle - Funcionarios</span>
      <div className="container">
        <div className="table">
          
        </div>
        <form >
        <table className="table">
          <thead>
            <th>Nome</th>
            <th>Email</th>
            <th>Data Nascimento</th>
            <th>Data Admissão</th>
            <th>Setor</th>
            <th>Cargo</th>
            <th>Nível</th>
            <th>Editar</th>
            <th>Visualizar</th>
            <th>Deletar</th>
          </thead>
          <tbody>
            {employees.map((employes) => ( 
              
              <tr>
                <td data-label="Nome"> { employes.nome}</td>
                <td data-label="Email">{employes.email}</td>
                <td data-label="Data_nascimento">{employes.data_nascimento}</td>
                <td data-label="Data_admissao">{employes.data_admissao}</td>
                <td data-label="Setor">{employes.setor}</td>
                <td data-label="Cargo">{employes.cargo}</td>
                <td data-label="Nível">{employes.nivel}</td>
                <td data-label="Editar">
                  {" "}
                  
                  <button
                  type="submit"
                  id="bnt-editar"
                  onClick={() => {
                    editEmployee(employes.id)
                    setNome(employes.nome)
                    setEmail(employes.email)
                    setCargo(employes.cargo)
                    setSetor(employes.setor)   
                    setNivel(employes.nivel)
                    setDataadmissao(employes.data_admissao)
                    setDatanascimento(employes.data_nascimento)
                    setId(employes.id)
                    // EditEmployee(employes.id)
                  } 
                }
                  >Editar</button> 
                </td>
                <td data-label="Vizualizar">
                  {" "}
                  <button 
                  type="submit"
                  id="btn-visualizar"
                  onClick={() => {
                    ViewEmployee(employes.id)
                    setNome(employes.nome)
                    setEmail(employes.email)
                    setCargo(employes.cargo)
                    setSetor(employes.setor)   
                    setNivel(employes.nivel)
                    setDataadmissao(employes.data_admissao)
                    setDatanascimento(employes.data_nascimento)
                    setId(employes.id)
                  }}
                  >Visualizar</button>
                </td>
                <td data-label="Deletar">
                  {" "}
                  <button
                    id="btn-deletar"
                    onClick={() => deleteEmployee(employes.id)}
                  >
                    Deletar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </form>
        
        <div className="btn-adicionar">
            <a href="/cadastro" id="adicionar">
              <FaPlus />
              Adicionar
            </a>
          </div>
          

        
      </div>
      <footer>
        actionsys
      </footer>
      </div>
    
  );
}

export default Home;