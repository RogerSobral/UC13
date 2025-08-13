import { useState } from "react";
import "./PainelMainClassificacaoFiscal.css";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

const PainelMainClassificacaoFiscal = () => {
  const [ncmField, setNcmField] = useState("");
  const [descricao, setDescricaoField] = useState("");
  const [cfopField, setCfopField] = useState("");
  const [cestField, setCestField] = useState("");
  const [origemField, setOrigemField] = useState("");
  const [cstIcmsField, setCstIcmsField] = useState("");
  const [aliquotaIcmsField, setAliquotaIcmsField] = useState("");
  const [cstPisField, setCstPisField] = useState("");
  const [aliquotaPisField, setAliquotaPisField] = useState("");
  const [cstCofinsField, setCstCofinsField] = useState("");
  const [aliquotaCofinsField, setAliquotaCofinsField] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  // Mock - substituir pelo fetch ao backend
  const classificacoes = [
    {
      ncm: "94036000",
      descricao: "Móveis de madeira e seus componentes",
      cfop: "5102",
      cest: "2803300",
      origem: "0 - Nacional",
      icms: 18.0,
      pis: 1.65,
      cofins: 7.6
    },
    {
      ncm: "94033000",
      descricao: "Móveis de metal",
      cfop: "5102",
      cest: "2803700",
      origem: "1 - Estrangeira importação direta",
      icms: 18.0,
      pis: 1.65,
      cofins: 7.6
    }
  ];

  const classificacoesFiltradas = classificacoes.filter(
    (c) =>
      c.ncm.includes(pesquisa) ||
      c.cfop.includes(pesquisa) ||
      c.cest.includes(pesquisa)
  );

  return (
    <div className="containerClassificacaoFiscal">
      {/* Formulário */}
      <form>
        <fieldset>
          <legend>Classificação Fiscal</legend>

          <div className="form-container">
            <div className="form-group">
              <label>NCM</label>
              <input
                value={ncmField}
                type="text"
                placeholder="NCM"
                onChange={(e) => setNcmField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Descrição</label>
              <input
                value={descricao}
                type="text"
                placeholder="Descrição"
                onChange={(e) => setDescricaoField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>CFOP</label>
              <input
                value={cfopField}
                type="text"
                placeholder="CFOP"
                onChange={(e) => setCfopField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>CEST</label>
              <input
                value={cestField}
                type="text"
                placeholder="CEST"
                onChange={(e) => setCestField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Origem da Mercadoria</label>
              <select
                value={origemField}
                onChange={(e) => setOrigemField(e.target.value)}
              >
                <option value="">Selecione...</option>
                <option value="0">0 - Nacional</option>
                <option value="1">1 - Estrangeira - Importação direta</option>
                <option value="2">2 - Estrangeira - Adquirida no mercado interno</option>
                <option value="3">3 - Nacional - Conteúdo importado superior a 40%</option>
                <option value="4">4 - Nacional - Produção conforme processos básicos</option>
                <option value="5">5 - Nacional - Conteúdo importado inferior ou igual a 40%</option>
                <option value="6">6 - Estrangeira - Sem similar nacional</option>
                <option value="7">7 - Estrangeira - Produção conforme processos básicos</option>
                <option value="8">8 - Nacional - Conteúdo importado superior a 70%</option>
              </select>
            </div>

            <div className="form-group">
              <label>CST ICMS</label>
              <input
                value={cstIcmsField}
                type="text"
                placeholder="CST ICMS"
                onChange={(e) => setCstIcmsField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Alíquota ICMS (%)</label>
              <input
                value={aliquotaIcmsField}
                type="number"
                step="0.01"
                placeholder="Alíquota ICMS"
                onChange={(e) => setAliquotaIcmsField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>CST PIS</label>
              <input
                value={cstPisField}
                type="text"
                placeholder="CST PIS"
                onChange={(e) => setCstPisField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Alíquota PIS (%)</label>
              <input
                value={aliquotaPisField}
                type="number"
                step="0.01"
                placeholder="Alíquota PIS"
                onChange={(e) => setAliquotaPisField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>CST COFINS</label>
              <input
                value={cstCofinsField}
                type="text"
                placeholder="CST COFINS"
                onChange={(e) => setCstCofinsField(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Alíquota COFINS (%)</label>
              <input
                value={aliquotaCofinsField}
                type="number"
                step="0.01"
                placeholder="Alíquota COFINS"
                onChange={(e) => setAliquotaCofinsField(e.target.value)}
              />
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
          placeholder="Pesquisar NCM, CFOP ou CEST..."
          className="search-input"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        <div className="containerTable">
          <table>
            <thead>
              <tr>
                <th>NCM</th>
                <th>CFOP</th>
                <th>CEST</th>
                <th>Origem</th>
                <th>ICMS (%)</th>
                <th>PIS (%)</th>
                <th>COFINS (%)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {classificacoesFiltradas.map((c, idx) => (
                <tr key={idx}>
                  <td>{c.ncm}</td>
                  <td>{c.cfop}</td>
                  <td>{c.cest}</td>
                  <td>{c.origem}</td>
                  <td>{c.icms}</td>
                  <td>{c.pis}</td>
                  <td>{c.cofins}</td>
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

export default PainelMainClassificacaoFiscal;
