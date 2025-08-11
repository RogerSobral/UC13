import {React,useState} from 'react'
import MenuBar from '../components/painelProduct/MenuBar'
import PainelMainClassificacaoFiscal from '../components/painelProduct/PainelMainClassificacaoFiscal';
const PainelProduct = () => {

    const [actionPainelProduct,setActionPainelProduct]=useState("classificacaoFiscal");


    const painelsProduct={
        classificacaoFiscal:(<PainelMainClassificacaoFiscal/>),
        addProdutos:(<div>
            <h1>Tela Add Produtos</h1>
        </div>),
         fornecedor:(<div>
            <h1>Tela Fornecedor</h1>
        </div>),
        notaFiscal:(<div>
            <h1>Tela Nota fiscal</h1>
        </div>),
        entrada:(<div>
            <h1>Tela entrada</h1>
        </div>),
        saida:(<div>
            <h1>Tela saída</h1>
        </div>),
        estoque:(<div>
            <h1>Tela estoque</h1>
        </div>),

    }

  return (
    <div>
        <nav className='headerMenu'>
            <MenuBar setActionPainelProduct={setActionPainelProduct}/>
            <hr />
            <div>

            </div>
        </nav>

        {painelsProduct[actionPainelProduct] || painelsProduct.classificacaoFiscal}
       </div>
  )
}

export default PainelProduct