import {useState} from 'react';
import "./PainelMainConsulta.css";
import { CiSearch } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";

const PainelMainConsulta = () => {
    const [filtroDescricao,setFiltroDescricao]=useState("");
    const [filtroCodigoInterno,setfiltroCodigoInterno]=useState("");
    const [filtroClassificacaoFiscal,setFiltroClassificacaoFiscal]=useState("");


    const listaNcm=[
        {cod:"8471.30.34"},
        {cod:"8471.60.25"},
        {cod:"8471.60.25"},
        {cod:"8528.72.00"},
        {cod:"8443.31.00"},
    ]

    const listaProdutos = [
        {
            produto: "Notebook Dell 15'",
            codigoInterno: "DLL1542",
            unidade: "UN",
            ncm: "8471.30.34",
            quantidade: 3,
            precoVenda: 4299.90,
            valorTotal: 12899.70
        },
        {
            produto: "Mouse Wireless",
            codigoInterno: "MSW2022",
            unidade: "UN",
            ncm: "8471.60.25",
            quantidade: 10,
            precoVenda: 129.90,
            valorTotal: 1299.00
        },
        {
            produto: "Teclado Mecânico",
            codigoInterno: "TKB3020",
            unidade: "UN",
            ncm: "8471.60.25",
            quantidade: 5,
            precoVenda: 349.90,
            valorTotal: 1749.50
        },
        {
            produto: "Monitor 24' LED",
            codigoInterno: "MON24LED",
            unidade: "UN",
            ncm: "8528.72.00",
            quantidade: 2,
            precoVenda: 899.90,
            valorTotal: 1799.80
        },
        {
            produto: "Impressora Multifuncional",
            codigoInterno: "IMP2021",
            unidade: "UN",
            ncm: "8443.31.00",
            quantidade: 1,
            precoVenda: 599.90,
            valorTotal: 599.90
        }
    ];
    
 const consultaFiltrada= listaProdutos.filter((prod)=>{
    return(  
        prod.codigoInterno.toLowerCase().includes(filtroCodigoInterno.toLowerCase())
     &&
    (filtroDescricao ? prod.produto.toLowerCase().includes( filtroDescricao.toLowerCase()) : true) 
    &&
    (filtroClassificacaoFiscal ? prod.ncm === filtroClassificacaoFiscal : true)
        
    )
    

 })
    
  return (


    <div className='containerConsulta'>

        <div className='filtro'>
            <input 
            type="text"
            placeholder='Descrição do Produto' 
            value={filtroDescricao}
            onChange={(e)=>setFiltroDescricao(e.target.value)}
            />

            <input 
            type="text"
            placeholder='Código Interno' 
            value={filtroCodigoInterno}
            onChange={(e)=>setfiltroCodigoInterno(e.target.value)}
            />

           

            <select
            value={filtroClassificacaoFiscal}
            onChange={(e)=>setFiltroClassificacaoFiscal(e.target.value)}
            >
                <option value="">Pesquisar</option>

                {listaNcm.map((ncm,index)=>(
                    <option key={index} value={ncm.cod}>{ncm.cod}</option>
                ))}

            </select>

            <button><RxUpdate/> <span>Atualizar Tela</span></button>

        </div>
        
        <div className='containerTableConsulta'>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Código<br />Interno</th>
                        <th>Unidade</th>
                        <th>NCM</th>
                        <th>Quantidade</th>
                        <th>Preço<br />Venda (R$)</th>
                        <th>Valor<br />Total (R$)</th>
                    </tr>

                </thead>
                <tbody>
                    {consultaFiltrada.map((row,index)=>(
                        <tr key={index}>
                            <td>{row.produto}</td>
                            <td>{row.codigoInterno}</td>
                            <td>{row.unidade}</td>
                            <td>{row.ncm}</td>
                            <td>{row.quantidade}</td>
                            <td>{row.precoVenda}</td>
                            <td>{row.valorTotal}</td>
                         </tr>
                    ))}

                </tbody>


            </table>

        </div>


    </div>
  )
}

export default PainelMainConsulta