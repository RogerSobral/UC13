import { useState } from "react";
import "./PainelMainClassificacaoFiscal.css"; // Reaproveitando seu CSS
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const PainelMainFornecedor = () => {
  // Campos Fornecedor
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [inscricaoEstadual, setInscricaoEstadual] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // Campos Endereço
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  // Campo de pesquisa
  const [pesquisa, setPesquisa] = useState("");

  // Mock de dados (depois substituir por fetch)
  const fornecedores = [
    {
      nome: "Móveis Premium LTDA",
      cnpj: "12.345.678/0001-99",
      inscricaoEstadual: "123456789",
      telefone: "(11) 3333-4444",
      email: "contato@moveispremium.com",
      logradouro: "Rua das Palmeiras",
      numero: "120",
      bairro: "Centro",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01000-000",
    },
    {
      nome: "Fábrica de Cadeiras SA",
      cnpj: "98.765.432/0001-11",
      inscricaoEstadual: "987654321",
      telefone: "(11) 2222-5555",
      email: "vendas@cadeirassa.com",
      logradouro: "Av. Brasil",
      numero: "500",
      bairro: "Jardim América",
      cidade: "São Paulo",
      estado: "SP",
      cep: "01400-000",
    }
  ];

  // Filtra por nome, CNPJ ou cidade
  const fornecedoresFiltrados = fornecedores.filter(f =>
    f.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    f.cnpj.includes(pesquisa) ||
    f.cidade.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div className="containerClassificacaoFiscal">
      {/* Formulário */}
      <form>
        <fieldset>
          <legend>Cadastro de Fornecedor</legend>

          <div className="form-container">
            <div className="form-group">
              <label>Nome/Razão Social</label>
              <input value={nome} type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
            </div>

            <div className="form-group">
              <label>CNPJ</label>
              <input value={cnpj} type="text" placeholder="00.000.000/0000-00" onChange={(e) => setCnpj(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Inscrição Estadual</label>
              <input value={inscricaoEstadual} type="text" placeholder="Inscrição Estadual" onChange={(e) => setInscricaoEstadual(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Telefone</label>
              <input value={telefone} type="text" placeholder="(xx) xxxx-xxxx" onChange={(e) => setTelefone(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input value={email} type="email" placeholder="exemplo@email.com" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Logradouro</label>
              <input value={logradouro} type="text" placeholder="Rua, Avenida..." onChange={(e) => setLogradouro(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Número</label>
              <input value={numero} type="text" placeholder="Número" onChange={(e) => setNumero(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Bairro</label>
              <input value={bairro} type="text" placeholder="Bairro" onChange={(e) => setBairro(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Cidade</label>
              <input value={cidade} type="text" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Estado (UF)</label>
              <input value={estado} type="text" placeholder="UF" maxLength={2} onChange={(e) => setEstado(e.target.value)} />
            </div>

            <div className="form-group">
              <label>CEP</label>
              <input value={cep} type="text" placeholder="00000-000" onChange={(e) => setCep(e.target.value)} />
            </div>
          </div>

          <div className="form-actions">
            <button>Cadastrar</button>
          </div>
        </fieldset>
      </form>

      {/* Lista */}
      <div className="tableListClassificacaoFiscal">
        <input
          type="text"
          placeholder="Pesquisar Nome, CNPJ ou Cidade..."
          className="search-input"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <div className="containerTable">
          <table>
            <thead>
              <tr>
                <th>Nome/Razão Social</th>
                <th>CNPJ</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Cidade</th>
                <th>UF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {fornecedoresFiltrados.map((f, idx) => (
                <tr key={idx}>
                  <td>{f.nome}</td>
                  <td>{f.cnpj}</td>
                  <td>{f.telefone}</td>
                  <td>{f.email}</td>
                  <td>{f.cidade}</td>
                  <td>{f.estado}</td>
                  <td>
                    <GrEdit className="action-icon" />{" "}
                    <MdDeleteForever className="action-icon delete-icon" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PainelMainFornecedor;
