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

export default function BarrasAccidentesMes(){
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dataset = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


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
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Accidentes por mes',
      },
    },
  };
  
  
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Número de accidentes',
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ],
  };
   
    return accidentes === null ? (
      <Col>
        <div class="loader"></div>
      </Col>
    ) : (
      accidentes.map(accidente => {
        if(accidente.fecha != null) {
          var mes = accidente.fecha.split('/')[1];
          dataset[mes-1] += 1;
        }
      }),
      <div>
        <Bar data={data} options={options} />
      </div>
    );       
  }