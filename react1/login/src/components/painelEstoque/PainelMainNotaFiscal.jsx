import { useState } from "react";
import "./PainelMainNotaFiscal.css";
import { GrView } from "react-icons/gr";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const PainelMainNotaFiscal = () => {
  const [filtroNumero, setFiltroNumero] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroParticipante, setFiltroParticipante] = useState("");
  const [filtroDataInicio, setFiltroDataInicio] = useState("");
  const [filtroDataFim, setFiltroDataFim] = useState("");

  // Mock de dados - futuramente virá do backend
  const notasFiscais = [
    {
      numero: "000123",
      data: "2025-08-10",
      tipo: "entrada",
      participante: "Fornecedor ABC",
      valorTotal: 1500.5,
    },
    {
      numero: "000124",
      data: "2025-08-11",
      tipo: "saida",
      participante: "Cliente João Silva",
      valorTotal: 2450.0,
    },
    {
      numero: "000125",
      data: "2025-08-11",
      tipo: "entrada",
      participante: "Fornecedor XPTO",
      valorTotal: 820.75,
    },
  ];

  const notasFiltradas = notasFiscais.filter((nf) => {
    return (
      nf.numero.includes(filtroNumero) &&
      (filtroTipo ? nf.tipo === filtroTipo : true) &&
      (filtroParticipante
        ? nf.participante
            .toLowerCase()
            .includes(filtroParticipante.toLowerCase())
        : true) &&
      (filtroDataInicio ? nf.data >= filtroDataInicio : true) &&
      (filtroDataFim ? nf.data <= filtroDataFim : true)
    );
  });

  return (
    <div className="containerNotaFiscal">
      {/* Filtros */}
      <div className="filtros">
        <input
          type="text"
          placeholder="Número NF"
          value={filtroNumero}
          onChange={(e) => setFiltroNumero(e.target.value)}
        />
        <select
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Todos os Tipos</option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <input
          type="text"
          placeholder="Participante"
          value={filtroParticipante}
          onChange={(e) => setFiltroParticipante(e.target.value)}
        />
        <label>Data Início:</label>
        <input
          type="date"
          value={filtroDataInicio}
          onChange={(e) => setFiltroDataInicio(e.target.value)}
        />
        <label>Data Fim:</label>
        <input
          type="date"
          value={filtroDataFim}
          onChange={(e) => setFiltroDataFim(e.target.value)}
        />
      </div>

      {/* Tabela */}
      <div className="containerTableNotaFiscal">
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Data</th>
              <th>Tipo</th>
              <th>Participante</th>
              <th>Valor Total</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {notasFiltradas.map((nf, idx) => (
              <tr key={idx}>
                <td>{nf.numero}</td>
                <td>{nf.data}</td>
                <td className={nf.tipo === "entrada" ? "tipo-entrada" : "tipo-saida"}>
                  {nf.tipo.toUpperCase()}
                </td>
                <td>{nf.participante}</td>
                <td>R$ {nf.valorTotal.toFixed(2)}</td>
                <td>
                  <GrView className="action-icon" title="Visualizar Itens" />{" "}
                  <MdEdit className="action-icon" title="Editar" />{" "}
                  <MdDeleteForever
                    className="action-icon delete-icon"
                    title="Excluir"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PainelMainNotaFiscal;
