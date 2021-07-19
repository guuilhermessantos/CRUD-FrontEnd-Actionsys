import { useUpdate } from "../../ContextPages/updateEmploye";
import { useHistory } from "react-router-dom";
import "../View/style.css"


function View() {

  const history = useHistory();
  const { nome, setNome } = useUpdate();
  const { email, setEmail } = useUpdate();
  const { dataNascimento, setDatanascimento } = useUpdate();
  const { dataAdmissao, setDataadmissao } = useUpdate();
  const { cargo, setCargo } = useUpdate();
  const { setor, setSetor } = useUpdate();
  const { nivel, setNivel } = useUpdate();
  const { id, setId } = useUpdate();
  
  

  
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

  return (
    <div className="App">
    <div className="HeaderCadastro">
      <h3 id="logo">Actionsys</h3>
      </div>
      <span id="TitleGrid"> Visualização de informações do funcionario  </span>
    <div className="container1">
      <form
        className="form-employe"
        
      >
        <label className="infoForm">Nome</label>
        <label className="infoUser"> {nome} </label>
        <hr/>
        <label className="infoForm">E-mail</label>
        <label className="infoUser"> {email} </label>
        <hr/>
        <label className="infoForm">Data Nascimento</label>
        <label className="infoUser" > {dataNascimento}</label>
        <hr/>
        <label className="infoForm">Data Admissão</label>
        <label className="infoUser" > {dataAdmissao}</label>
        <hr/>
        <label className="infoForm">Nível</label>
        <label className="infoUser" > {nivel} </label>
        <hr/>
        <label className="infoForm">Setor</label>
        <label className="infoUser" > {setor}</label>
        <hr/>
        <label className="infoForm">Cargo</label>
        <label className="infoUser" > {cargo}</label>

        <div className="divButons">
        <div className="voltarView">
            <a href="/" id="voltar">
              Voltar
            </a>
          </div>
          <button
                  type="submit"
                  id="editarView"
                  onClick={() => {
                    editEmployee(id)
                    setNome(nome)
                    setEmail(email)
                    setCargo(cargo)
                    setSetor(setor)   
                    setNivel(nivel)
                    setDataadmissao(dataAdmissao)
                    setDatanascimento(dataNascimento)
                    setId(id)
                  } 
                }
            > Editar </button> 
        </div>
      </form>
    </div>
    <footer>
        actionsys
      </footer>
    </div>
  );
}
export default View;