import { useState } from "react";
import "./PainelMainProduto.css";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const PainelMainProduto = () => {
  const [descricao, setDescricao] = useState("");
  const [codigoInterno, setCodigoInterno] = useState("");
  const [codigoBarras, setCodigoBarras] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [unidadeComercial, setUnidadeComercial] = useState("");
  const [precoVenda, setPrecoVenda] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  // Mock de dados - trocar por fetch no backend depois
  const produtos = [
    { descricao: "Cadeira de Escritório", codInterno: "001", codBarras: "7891234567890", unidade: "UN", precoVenda: 299.90 },
    { descricao: "Mesa de Madeira", codInterno: "002", codBarras: "7899876543210", unidade: "PC", precoVenda: 499.90 }
  ];

  const listaClassificacaoFiscal = [
    { ncm: "1234.56.78" },
    { ncm: "2345.67.89" },
    { ncm: "3456.78.90" },
    { ncm: "4567.89.01" }
  ];

  const produtosFiltrados = produtos.filter(p =>
    p.descricao.toLowerCase().includes(pesquisa.toLowerCase()) ||
    p.codInterno.includes(pesquisa) ||
    p.codBarras.includes(pesquisa)
  );

  return (
    <div className="containerProduto">
      {/* Formulário */}
      <form>
        <fieldset>
          <legend>Cadastro de Produto</legend>

          <div className="form-container">
            <div className="form-group">
              <label>Descrição</label>
              <input
                value={descricao}
                type="text"
                placeholder="Descrição do produto"
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Código Interno</label>
              <input
                value={codigoInterno}
                type="text"
                placeholder="Código Interno"
                onChange={(e) => setCodigoInterno(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Código de Barras</label>
              <input
                value={codigoBarras}
                type="text"
                placeholder="Código de Barras"
                onChange={(e) => setCodigoBarras(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Classificação Fiscal</label>
              <select
                value={classificacao}
                onChange={(e) => setClassificacao(e.target.value)}
              >
                <option value="">Selecione...</option>
                {listaClassificacaoFiscal.map((valor, index) => (
                  <option key={index}>{valor.ncm}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Unidade Comercial</label>
              <select
                value={unidadeComercial}
                onChange={(e) => setUnidadeComercial(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="UN">Unidade (UN)</option>
                <option value="PC">Pacote (PC)</option>
                <option value="CX">Caixa (CX)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Preço de Venda (R$)</label>
              <input
                value={precoVenda}
                type="number"
                step="0.01"
                placeholder="0,00"
                onChange={(e) => setPrecoVenda(e.target.value)}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button">Cadastrar</button>
          </div>
        </fieldset>
      </form>

      {/* Lista */}
      <div className="tableListProduto">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="search-input"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <div className="containerTable">
          <table>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Código Interno</th>
                <th>Código de Barras</th>
                <th>Unidade</th>
                <th>Preço Venda</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtosFiltrados.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.descricao}</td>
                  <td>{p.codInterno}</td>
                  <td>{p.codBarras}</td>
                  <td>{p.unidade}</td>
                  <td>R$ {p.precoVenda.toFixed(2)}</td>
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

export default PainelMainProduto;
