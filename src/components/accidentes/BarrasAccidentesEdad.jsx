import '../../styles/Loader.css';
import {React, useState, useEffect } from 'react';
import { getAllAccidentes } from "../../utils/apicalls.js";
import { Bar } from 'react-chartjs-2';
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

export default function BarrasAccidentesEdad(){

  const labels = ["Menor de 5 años","De 6 a 9 años","De 10 a 14 años","De 15 a 17 años","De 18 a 20 años","De 21 a 24 años","De 25 a 29 años","De 30 a 34 años","De 35 a 39 años","De 40 a 44 años","De 45 a 49 años","De 50 a 54 años","De 55 a 59 años","De 60 a 64 años","De 65 a 69 años","De 70 a 74 años","Más de 74 años"];
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

  console.log(accidentes);
  
  
  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Accidentes por edad',
      },
    },
  };
  
  
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Número de accidentes por edad',
        data: dataset,
        // do a degradient color for the 21 bars
        backgroundColor:'rgba(300, 99, 132, 0.6)',
        borderColor:'rgba(300, 99, 132, 1)',
        borderWidth: 2,
        hoverBorderWidth: 0
      }
    ],
  };
   
    return accidentes === null ? (
      <Col>
        <div class="loader"></div>
      </Col>
    ) : (
      accidentes.forEach(accidente => {
        if((accidente.rango_edad !== null) || (accidente.rango_edad !== 'NULL')) {
          dataset[labels.indexOf(accidente.rango_edad)] += 1;
        }
      }),
      console.log(Array.from(new Set(accidentes.map(accident => accident.rango_edad)))),
      <div>
        <Bar type={'horizontalBar'} data={data} options={options} />
      </div>
    );       
  }