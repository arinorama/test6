import React from "react";
import { dataFetchStatus } from "../../common/helpers/statusVars";
import useMaliyet from '../services/useMaliyet';


const MaliyetTable = (props) => {
    const { status, data } = useMaliyet(props.projeKodu);

    const renderResults = () => {
        if (status === dataFetchStatus.fetched) {
            return data.data.material_transaction_ozet.map(
                (dataRow, key)=>{
                    return <li key={key}>{dataRow.muhasebe_grup_adi} - {dataRow.muhasebe_net_tutar_usd}</li>;
                }
            );
        }
        return null;
    }

    return(
        <div>
            Maliyet Component: {props.projeKodu}
            {status !== dataFetchStatus.fetched ? <div>{status}</div> : null}
            {data && <ul>{renderResults()}</ul>}
        </div>
        
    );
}

export default MaliyetTable;
