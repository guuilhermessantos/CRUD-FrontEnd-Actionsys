import { useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import "../Update/style.css"
import { FaSpinner } from "react-icons/fa"
import { useUpdate } from "../../ContextPages/updateEmploye";
interface IEmployee {
  name: string;
  id: number;
  email: string;
}


function Update() {
  
  const history = useHistory();
  const { nome, setNome } = useUpdate();
  const { email, setEmail } = useUpdate();
  const { dataNascimento, setDatanascimento } = useUpdate();
  const { dataAdmissao, setDataadmissao } = useUpdate();
  const { cargo, setCargo } = useUpdate();
  const { setor, setSetor } = useUpdate();
  const { nivel, setNivel } = useUpdate();
  const { id, setId } = useUpdate();
  const [isLoading, setLoading] = useState(false);
  const [isChangeBackground, setIsChangeBackground] = useState(false);
  const [employees, setEmployees] = useState<IEmployee[]>([]);

  function changebackground() {
    const input1 = document.getElementById("input1") as HTMLInputElement;
    const input2 = document.getElementById("input2") as HTMLInputElement;
    const input3 = document.getElementById("input3") as HTMLInputElement;
    const input4 = document.getElementById("input4") as HTMLInputElement;
    const input5 = document.getElementById("input5") as HTMLInputElement;
    const input6 = document.getElementById("input6") as HTMLInputElement;
    const input7 = document.getElementById("input7") as HTMLInputElement;
    if (
      input1.value !== "" &&
      input2.value !== "" &&
      input3.value !== "" &&
      input4.value !== "" &&
      input5.value !== "" &&
      input6.value !== "" &&
      input7.value !== ""
    ) {
      setIsChangeBackground(true);
    } else {
      setIsChangeBackground(false);
    }
  }
  async function handleregister() {
    setLoading(true);
    try {
      const { data } = await api.put(`funcionarios/${id}`, {
        nome: nome,
        email: email,
        dataNascimento: dataNascimento,
        nivel: nivel,
        dataAdmissao: dataAdmissao,
        setor: setor,
        cargo: cargo,
      });

      setLoading(false);
      setEmployees((state) => [...state, data]);



      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
    <div className="HeaderCadastro">
      <h3 id="logo">Actionsys</h3>
      </div>

      <span id="TitleGrid"> Edição dos dados do funcionario   </span>
    <div className="container1">
      <form
        className="form-employe"
        onSubmit={(e) => {
          e.preventDefault();
          // handleregister();
        }}
      >
        <label>Nome</label>
        <input
          id="input1"
           value={nome}
          onChange={(e) => {
            changebackground();
            setNome(e.target.value);
          }}
          placeholder="Digite seu nome"
        ></input>
        <label>E-mail</label>
        <input
          id="input2"
          value={email}
          onChange={(e) => {
            changebackground();
            setEmail(e.target.value);
          }}
          placeholder="Digite seu e-mail"
        ></input>
        <label>Data Nascimento</label>
        <input
          id="input3"
          value={dataNascimento}
          onChange={(e) => {
            changebackground();
            setDatanascimento(e.target.value);
          }}
          
        ></input>
        <label>Data Admissão</label>
        <input
          id="input4"
          value={dataAdmissao}
          onChange={(e) => {
            changebackground();
            setDataadmissao(e.target.value);
          }}
          
        ></input>
        <label>Nível</label>
        <select
          id="input5"
          value={nivel}
          onChange={(e) => {
            changebackground();
            setNivel(e.target.value);
          }}
          placeholder="Nível"
        >
          <option value="select" disabled selected>
            Selecione seu nível:
          </option>
          <option value="Estagiário">Estagiário</option>
          <option value="Junior">Junior</option>
          <option value="Pleno">Pleno</option>
          <option value="Sênior">Sênior</option>
        </select>
        <label>Setor</label>
        <select
          id="input6"
          value={setor}
          onChange={(e) => {
            changebackground();
            setSetor(e.target.value);
          }}
          placeholder="Selecione seu Setor"
        >
          <option value="" disabled selected>
            Selecione seu Setor
          </option>

          <option value="Engenharia">Engenharia</option>
          <option value="Compras">Compras</option>
          <option value="Vendas">Vendas</option>
          <option value="Financeiro">Financeiro</option>
        </select>
        <label>Cargo</label>

        <select
          id="input7"
          value={cargo}
          
          onChange={(e) => {
            changebackground();
            setCargo(e.target.value);
          }}
          placeholder="Cargo"
        >
          <option value="select" disabled selected>
            Selecione seu Cargo:
          </option>
          <option value="Auxiliar">Auxiliar</option>
          <option value="Técnico">Técnico</option>
          <option value="Engenheiro">Engenheiro</option>
          <option value="Diretor">Diretor</option>
        </select>
        <div className="divButons">
        
        <div className="btn-voltarUp">
            <a href="/" id="voltar">
              
              Voltar
            </a>
          </div>
          {!isLoading && (
          <button
            onClick={handleregister}
            type="submit"
            className={isChangeBackground ? "botao-update2" : "botao-update"}
          >
            Salvar
          </button>
        )}
        {isLoading && (
          <button
            className={isChangeBackground ? "botao-update2" : "botao-update"}
            type="submit"
            disabled
          >
            Salvar
            <FaSpinner className="spinner" />
          </button>
        )}
          </div>
      </form>
    </div>
    <footer>
        actionsys
      </footer>
    </div>
  );
}
export default Update;