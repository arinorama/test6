import { useEffect, useState } from "react";
import ViaApi from "../../common/services/ViaApi";
import { dataFetchStatus } from "../../common/helpers/statusVars";

const useMaliyet = (projeKodu) => {

    const [status, setStatus] = useState(dataFetchStatus.idle);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!projeKodu) return;

        console.log('useFetch:' + projeKodu);        
        
        const fetchData = async () => {
            setStatus(dataFetchStatus.fethcing);
            console.log(dataFetchStatus.fethcing);
            const data = await ViaApi.get("", { 
                params: {
                  pid: "5980",
                  aid: "1",
                  data: '{"format":"json","proje_kod":"' + projeKodu + '"}', 
                },
              });
              setData(data);
              setStatus(dataFetchStatus.fetched);
              console.log(dataFetchStatus.fetched);
        };

        fetchData();

    }, [projeKodu]);

    const transformData = () => {
      console.log('transforming data: tree data olustur');        
    }

    useEffect(() => {
      if (status === dataFetchStatus.fetched) {
        transformData();
      }
            
    }, [status]);

    return { status, data };
};

export default useMaliyet;