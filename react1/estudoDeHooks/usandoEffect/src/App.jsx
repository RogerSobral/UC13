import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [filtros, setFiltros] = useState({
    id:"",
    nome:"",
    ncm:""
  })

  const [dadosTabela, setDadosTabela] = useState([]);
  

  // MOCK DE DADOS
  const produtos = [
    { id: 1, nome: "Cadeira", qtd: 10, precoVenda: 150, precoCompra: 100, ncm: "94036000", fornecedor: "Fornecedor A", ultimaVenda: "2025-08-01" },
    { id: 2, nome: "Mesa", qtd: 5, precoVenda: 400, precoCompra: 300, ncm: "94033000", fornecedor: "Fornecedor B", ultimaVenda: "2025-06-20" },
    { id: 3, nome: "Armário", qtd: 2, precoVenda: 900, precoCompra: 700, ncm: "94038100", fornecedor: "Fornecedor A", ultimaVenda: "2025-05-15" },
    { id: 4, nome: "Sofá", qtd: 0, precoVenda: 1200, precoCompra: 900, ncm: "94016190", fornecedor: "Fornecedor C", ultimaVenda: "2025-03-10" },
  ];


  useEffect(()=>{
    setDadosTabela(produtos)
  },[])

  const handleFilter=(e)=>{
    let valorFiltrado=[...produtos];
    if(filtros.id) valorFiltrado= valorFiltrado.filter((p)=>p.id==filtros.id);
    if(filtros.nome) valorFiltrado= valorFiltrado.filter((p)=>p.nome==filtros.nome);
    setDadosTabela(valorFiltrado)

  }


  return (
    <>
     <div>
      <input type="text" placeholder='id' value={filtros.id} onChange={(e)=> setFiltros({...filtros,id:e.target.value})} />

      <input type="text" placeholder='nome' value={filtros.nome} onChange={(e)=> setFiltros({...filtros,nome:e.target.value})} />

      <input type="text" placeholder='ncm' value={filtros.ncm} onChange={(e)=> setFiltros({...filtros,ncm:e.target.value})} />

      <button onClick={handleFilter}>filtrar</button>

     </div>

    <table>
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
      {dadosTabela.map((row,index)=>(
        <tr key={index}>
          <td>{row.nome}</td>
          <td>{row.qtd}</td>
          <td>{row.precoCompra}</td>
          <td>{row.precoVenda}</td>
          <td>{row.fornecedor}</td>
        </tr>
      ))}

    </tbody>
      
    </table>


    </>
  )
}

export default App
