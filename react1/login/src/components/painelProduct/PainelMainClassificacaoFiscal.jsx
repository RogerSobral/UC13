import { useState } from "react";
import "./PainelMainClassificacaoFiscal.css";

const PainelMainClassificacaoFiscal = () => {
    const [ncmField, setNcmField] = useState("");
    const [cfopField, setCfopField] = useState("");
    const [cestField, setCestField] = useState("");
    const [cstIcmsField, setCstIcmsField] = useState("");
    const [aliquotaIcmsField, setAliquotaIcmsField] = useState("");
    const [cstPisField, setCstPisField] = useState("");
    const [aliquotaPisField, setAliquotaPisField] = useState("");
    const [cstCofinsField, setCstCofinsField] = useState("");
    const [aliquotaCofinsField, setAliquotaCofinsField] = useState("");

    return (
        <div>
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
        </div>
    );
};

export default PainelMainClassificacaoFiscal;
