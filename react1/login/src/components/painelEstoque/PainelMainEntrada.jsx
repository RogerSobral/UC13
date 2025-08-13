import { useState } from "react";
import "./PainelMainEntrada.css";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const PainelMainEntrada = () => {
  const [fornecedor, setFornecedor] = useState("");
  const [notaFiscal, setNotaFiscal] = useState("");
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [precoUnitario, setPrecoUnitario] = useState("");
  const [dataEntrada, setDataEntrada] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  // Mock Fornecedores
  const fornecedores = [
    { id: 1, nome: "Móveis Silva" },
    { id: 2, nome: "Estofados Brasil" }
  ];

  // Mock Produtos
  const produtos = [
    { id: 1, descricao: "Cadeira de Escritório" },
    { id: 2, descricao: "Mesa de Madeira" }
  ];

  // Mock Lista de Entradas
  const entradas = [
    {
      fornecedor: "Móveis Silva",
      notaFiscal: "NF12345",
      produto: "Cadeira de Escritório",
      quantidade: 10,
      precoUnitario: 150.0,
      dataEntrada: "2025-08-10"
    },
    {
      fornecedor: "Estofados Brasil",
      notaFiscal: "NF67890",
      produto: "Mesa de Madeira",
      quantidade: 5,
      precoUnitario: 300.0,
      dataEntrada: "2025-08-12"
    }
  ];

  const entradasFiltradas = entradas.filter(e =>
    e.fornecedor.toLowerCase().includes(pesquisa.toLowerCase()) ||
    e.produto.toLowerCase().includes(pesquisa.toLowerCase()) ||
    e.notaFiscal.includes(pesquisa)
  );

  return (
    <div className="containerEntrada">
      {/* Formulário */}
      <form>
        <fieldset>
          <legend>Registrar Entrada de Produtos</legend>

          <div className="form-container">
            <div className="form-group">
              <label>Fornecedor</label>
              <select
                value={fornecedor}
                onChange={(e) => setFornecedor(e.target.value)}
              >
                <option value="">Selecione...</option>
                {fornecedores.map((f) => (
                  <option key={f.id} value={f.nome}>{f.nome}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Número da Nota Fiscal</label>
              <input
                value={notaFiscal}
                type="text"
                placeholder="Ex: NF12345"
                onChange={(e) => setNotaFiscal(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Produto</label>
              <select
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
              >
                <option value="">Selecione...</option>
                {produtos.map((p) => (
                  <option key={p.id} value={p.descricao}>{p.descricao}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Quantidade</label>
              <input
                value={quantidade}
                type="number"
                placeholder="0"
                onChange={(e) => setQuantidade(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Preço Unitário (R$)</label>
              <input
                value={precoUnitario}
                type="number"
                step="0.01"
                placeholder="0,00"
                onChange={(e) => setPrecoUnitario(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Data de Entrada</label>
              <input
                value={dataEntrada}
                type="date"
                onChange={(e) => setDataEntrada(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button">Registrar Entrada</button>
          </div>
        </fieldset>
      </form>

      {/* Lista */}
      <div className="tableListEntrada">
        <input
          type="text"
          placeholder="Pesquisar fornecedor, produto ou NF..."
          className="search-input"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />

        <div className="containerTable">
          <table>
            <thead>
              <tr>
                <th>Fornecedor</th>
                <th>Nota Fiscal</th>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Data Entrada</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {entradasFiltradas.map((e, idx) => (
                <tr key={idx}>
                  <td>{e.fornecedor}</td>
                  <td>{e.notaFiscal}</td>
                  <td>{e.produto}</td>
                  <td>{e.quantidade}</td>
                  <td>R$ {e.precoUnitario.toFixed(2)}</td>
                  <td>{e.dataEntrada}</td>
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

export default PainelMainEntrada;
