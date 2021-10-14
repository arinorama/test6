import React from 'react';
import MaliyetTable from '../components/maliyetComponent';
import ProjelerWidget from '../components/projelerWidget';

const MaliyetPage = (props) =>{
    return(
        <div>
            Maliyet Page:
            <MaliyetTable projeKodu = {props.projeKodu}/>

            <ProjelerWidget />
        </div>
    );
}
MaliyetPage.defaultProps = {
    projeKodu : '21_060_266'
};
export default MaliyetPage;