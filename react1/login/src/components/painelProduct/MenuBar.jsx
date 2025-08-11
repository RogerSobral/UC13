import React from 'react'
import './menuBar.css';
import { TbTax,TbPackages  } from "react-icons/tb";
import { LuPackagePlus,LuPackageMinus} from "react-icons/lu";
import { FaTruckLoading,FaFileInvoiceDollar  } from "react-icons/fa";
import { GoPackageDependents } from "react-icons/go";

const MenuBar = ({setActionPainelProduct}) => {

   
  return (
    <div className='menuBar'>
                <ul>
                    <li onClick={()=> setActionPainelProduct("classificacaoFiscal")} > <TbTax/> Classificação Fiscal</li>

                    <li onClick={()=> setActionPainelProduct("addProdutos")}  ><LuPackagePlus/> Add Produto</li>

                    <li onClick={()=> setActionPainelProduct("fornecedor")} ><FaTruckLoading/> Fornecedor</li>

                    <li  onClick={()=> setActionPainelProduct("notaFiscal")}
                    ><FaFileInvoiceDollar/> Nota Fiscal</li>

                    <li  onClick={()=> setActionPainelProduct("entrada")}  ><GoPackageDependents/>  Entrada</li>

                    <li onClick={()=> setActionPainelProduct("saida")}><LuPackageMinus/> Saida</li>

                    <li onClick={()=> setActionPainelProduct("estoque")} ><TbPackages/> Estoque</li>
                </ul>
            </div>
  )
}

export default MenuBar