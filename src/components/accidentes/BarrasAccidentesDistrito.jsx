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

export default function BarrasAccidentesDistrito(){

  const labels = ['SAN BLAS-CANILLEJAS', 'HORTALEZA', 'CHAMBERÍ', 'CIUDAD LINEAL', 'CENTRO', 'CARABANCHEL', 'SALAMANCA', 'RETIRO', 'CHAMARTÍN', 'PUENTE DE VALLECAS', 'MORATALAZ', 'VILLAVERDE', 'MONCLOA-ARAVACA', 'VILLA DE VALLECAS', 'USERA', 'LATINA', 'ARGANZUELA', 'FUENCARRAL-EL PARDO', 'TETUÁN', 'VICÁLVARO', 'BARAJAS'];
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
        text: 'Accidentes por distrito',
      },
    },
  };
  
  
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Número de accidentes por distrito',
        data: dataset,
        // do a degradient color for the 21 bars
        backgroundColor: [
          'rgba(300, 99, 132, 0.6)',
          'rgba(285, 99, 132, 0.6)',
          'rgba(270, 99, 132, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(240, 99, 132, 0.6)',
          'rgba(225, 99, 132, 0.6)',
          'rgba(210, 99, 132, 0.6)',
          'rgba(195, 99, 132, 0.6)',
          'rgba(180, 99, 132, 0.6)',
          'rgba(165, 99, 132, 0.6)',
          'rgba(150, 99, 132, 0.6)',
          'rgba(135, 99, 132, 0.6)',
          'rgba(120, 99, 132, 0.6)',
          'rgba(105, 99, 132, 0.6)',
          'rgba(90, 99, 132, 0.6)',
          'rgba(75, 99, 132, 0.6)',
          'rgba(60, 99, 132, 0.6)',
          'rgba(45, 99, 132, 0.6)',
          'rgba(30, 99, 132, 0.6)',
          'rgba(15, 99, 132, 0.6)',
          'rgba(0, 99, 132, 0.6)',
        ],
        borderColor: [
          'rgba(300, 99, 132, 1)',
          'rgba(285, 99, 132, 1)',
          'rgba(270, 99, 132, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(240, 99, 132, 1)',
          'rgba(225, 99, 132, 1)',
          'rgba(210, 99, 132, 1)',
          'rgba(195, 99, 132, 1)',
          'rgba(180, 99, 132, 1)',
          'rgba(165, 99, 132, 1)',
          'rgba(150, 99, 132, 1)',
          'rgba(135, 99, 132, 1)',
          'rgba(120, 99, 132, 1)',
          'rgba(105, 99, 132, 1)',
          'rgba(90, 99, 132, 1)',
          'rgba(75, 99, 132, 1)',
          'rgba(60, 99, 132, 1)',
          'rgba(45, 99, 132, 1)',
          'rgba(30, 99, 132, 1)',
          'rgba(15, 99, 132, 1)',
          'rgba(0, 99, 132, 1)',
        ],
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
        if((accidente.distrito !== null) || (accidente.distrito !== 'NULL')) {
          dataset[labels.indexOf(accidente.distrito)] += 1;
        }
      }),
      labels.sort((a, b) => dataset[labels.indexOf(b)] - dataset[labels.indexOf(a)]),
      dataset.sort((a, b) => b - a),
      <div>
        <Bar type={'horizontalBar'} data={data} options={options} />
      </div>
    );       
  }