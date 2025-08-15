import { useState, useEffect } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./PainelMainRelatorio.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const PainelMainRelatorio = () => {
  const [filtros, setFiltros] = useState({
    produto: "",
    dataInicio: "",
    dataFim: "",
    classificacao: "",
    fornecedor: "",
  });

  const [dadosTabela, setDadosTabela] = useState([]);

  // MOCK DE DADOS
  const produtos = [
    { id: 1, nome: "Cadeira", qtd: 10, precoVenda: 150, precoCompra: 100, ncm: "94036000", fornecedor: "Fornecedor A", ultimaVenda: "2025-08-01" },
    { id: 2, nome: "Mesa", qtd: 5, precoVenda: 400, precoCompra: 300, ncm: "94033000", fornecedor: "Fornecedor B", ultimaVenda: "2025-06-20" },
    { id: 3, nome: "Armário", qtd: 2, precoVenda: 900, precoCompra: 700, ncm: "94038100", fornecedor: "Fornecedor A", ultimaVenda: "2025-05-15" },
    { id: 4, nome: "Sofá", qtd: 0, precoVenda: 1200, precoCompra: 900, ncm: "94016190", fornecedor: "Fornecedor C", ultimaVenda: "2025-03-10" },
  ];

  const fornecedores = ["Fornecedor A", "Fornecedor B", "Fornecedor C"];
  const classificacoes = ["94036000", "94033000", "94038100", "94016190"];

  useEffect(() => {
    setDadosTabela(produtos);
  }, []);

  // FILTRAR
  const filtrar = () => {
    let filtrados = [...produtos];
    if (filtros.produto) filtrados = filtrados.filter(p => p.nome === filtros.produto);
    if (filtros.classificacao) filtrados = filtrados.filter(p => p.ncm === filtros.classificacao);
    if (filtros.fornecedor) filtrados = filtrados.filter(p => p.fornecedor === filtros.fornecedor);
    if (filtros.dataInicio) filtrados = filtrados.filter(p => new Date(p.ultimaVenda) >= new Date(filtros.dataInicio));
    if (filtros.dataFim) filtrados = filtrados.filter(p => new Date(p.ultimaVenda) <= new Date(filtros.dataFim));
    setDadosTabela(filtrados);
  };

  // GERAR PDF
  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Estoque", 14, 10);
    doc.autoTable({
      head: [["Produto", "Qtd", "Preço Compra", "Preço Venda", "Fornecedor"]],
      body: dadosTabela.map(p => [p.nome, p.qtd, p.precoCompra.toFixed(2), p.precoVenda.toFixed(2), p.fornecedor])
    });
    doc.save("relatorio-estoque.pdf");
  };

  // CARDS RESUMO
  const totalQtd = dadosTabela.reduce((acc, p) => acc + p.qtd, 0);
  const totalInvestido = dadosTabela.reduce((acc, p) => acc + (p.qtd * p.precoCompra), 0);
  const totalVenda = dadosTabela.reduce((acc, p) => acc + (p.qtd * p.precoVenda), 0);

  // GRÁFICOS
  const graficoQtd = {
    labels: dadosTabela.map(p => p.nome),
    datasets: [{ label: "Quantidade", data: dadosTabela.map(p => p.qtd), backgroundColor: "#4cafef" }]
  };

  const graficoVenda = {
    labels: dadosTabela.map(p => p.nome),
    datasets: [{ label: "Valor Total Venda", data: dadosTabela.map(p => p.qtd * p.precoVenda), backgroundColor: ["#4caf50", "#ff9800", "#2196f3", "#f44336"] }]
  };

  const graficoInvestido = {
    labels: dadosTabela.map(p => p.nome),
    datasets: [{ label: "Valor Investido", data: dadosTabela.map(p => p.qtd * p.precoCompra), backgroundColor: "#ff9800" }]
  };

  const estoqueCritico = dadosTabela.filter(p => p.qtd < 3);

  const semMovimento = dadosTabela.filter(p => {
    const diffDias = (new Date() - new Date(p.ultimaVenda)) / (1000 * 60 * 60 * 24);
    return diffDias > 60;
  });

  return (
    <div className="relatorio-container">
      {/* FILTROS */}
      <div className="filtros-container">
        <label>Produto:</label>
        <select value={filtros.produto} onChange={e => setFiltros({ ...filtros, produto: e.target.value })}>
          <option value="">Todos</option>
          {produtos.map(p => <option key={p.id}>{p.nome}</option>)}
        </select>

        <label>Período:</label>
        <input type="date" value={filtros.dataInicio} onChange={e => setFiltros({ ...filtros, dataInicio: e.target.value })} />
        <input type="date" value={filtros.dataFim} onChange={e => setFiltros({ ...filtros, dataFim: e.target.value })} />

        <label>Classificação Fiscal:</label>
        <select value={filtros.classificacao} onChange={e => setFiltros({ ...filtros, classificacao: e.target.value })}>
          <option value="">Todas</option>
          {classificacoes.map(c => <option key={c}>{c}</option>)}
        </select>

        <label>Fornecedor:</label>
        <select value={filtros.fornecedor} onChange={e => setFiltros({ ...filtros, fornecedor: e.target.value })}>
          <option value="">Todos</option>
          {fornecedores.map(f => <option key={f}>{f}</option>)}
        </select>

        <button onClick={filtrar}>Filtrar</button>
        <button onClick={gerarPDF}>Gerar PDF</button>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        <div className="card">Quantidade: {totalQtd}</div>
        <div className="card">Investido: R$ {totalInvestido.toFixed(2)}</div>
        <div className="card">Venda: R$ {totalVenda.toFixed(2)}</div>
      </div>

      {/* GRÁFICOS */}
      <div className="graficos-container">
        <div className="grafico"><Bar data={graficoQtd} /></div>
        <div className="grafico"><Doughnut data={graficoVenda} /></div>
        <div className="grafico"><Bar data={graficoInvestido} /></div>
        <div className="grafico">
          <h4>Estoque Crítico</h4>
          <ul>{estoqueCritico.map(p => <li key={p.id}>{p.nome} ({p.qtd})</li>)}</ul>
        </div>
        <div className="grafico">
          <h4>Sem Movimento</h4>
          <ul>{semMovimento.map(p => <li key={p.id}>{p.nome}</li>)}</ul>
        </div>
      </div>

      {/* TABELA */}
      <table className="tabela-estoque">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Qtd</th>
            <th>Preço Compra</th>
            <th>Preço Venda</th>
            <th>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          {dadosTabela.map(p => (
            <tr key={p.id}>
              <td>{p.nome}</td>
              <td>{p.qtd}</td>
              <td>R$ {p.precoCompra.toFixed(2)}</td>
              <td>R$ {p.precoVenda.toFixed(2)}</td>
              <td>{p.fornecedor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PainelMainRelatorio;
