import '../../styles/Loader.css';
import {React, useState, useEffect } from 'react';
import { getAllAccidentes } from "../../utils/apicalls.js";
import TreeMap from 'react-d3-treemap';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Col } from "reactstrap";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TreemapAccidentesTipo(){

  const labels = ["Colisión fronto-lateral","Choque contra obstáculo fijo","Alcance","Colisión lateral","Solo salida de la vía","Colisión frontal","Caída","Vuelco","Atropello a persona","Colisión múltiple","Despeñamiento","Atropello a animal","Otro"];
  const dataset = Array(labels.length).fill(0);

  const [accidentes, setAccidentes] = useState(null);

  const getAccidentes = () => {
    getAllAccidentes().then((accidentes) => {
      setAccidentes(accidentes);
    });
  };

  useEffect(() => {
    getAccidentes();
  }, []);

  var data ={};
          
  return accidentes === null ? (
    <Col>
      <div class="loader"></div>
    </Col>
      ) : (accidentes.forEach(accidente => {
        if((accidente.tipo_accidente !== null) || (accidente.tipo_accidente !== 'NULL')) {
          dataset[labels.indexOf(accidente.tipo_accidente)] += 1;
        }
      }),
      data = {
        name: "Accidentes por tipo",
        children: [
            { name: "Colisión fronto-lateral", value: dataset[0] },
            { name: "Choque contra obstáculo fijo", value: dataset[1] },
            { name: "Alcance", value: dataset[2] },
            { name: "Colisión lateral", value: dataset[3] },
            { name: "Solo salida de la vía", value: dataset[4] },
            { name: "Colisión frontal", value: dataset[5] },
            { name: "Caída", value: dataset[6] },
            { name: "Vuelco", value: dataset[7] },
            { name: "Atropello a persona", value: dataset[8] },
            { name: "Colisión múltiple", value: dataset[9] },
            { name: "Despeñamiento", value: dataset[10] },
            { name: "Atropello a animal", value: dataset[11] },
            { name: "Otro", value: dataset[12] }]
        },
      <Col>
      <TreeMap
        height={485}
        width={800}
        data={data}
        valueUnit={"accidentes"}
        nodeStyle={{
          fontSize: 12,
          paddingTop: 3,
          paddingLeft: 5,
          paddingRight: 5,
        }}
      />
      </Col>);
}