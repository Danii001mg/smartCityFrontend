import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container, Badge, CardTitle, Table, Button, Media } from 'reactstrap';
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";

import { getAllAccidentes, deleteBookmark } from "../../utils/apicalls.js";
import { getDateInStrFormat } from "../../utils/utils.js";
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

import Header from '../Header.jsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function MyMovieList(){

  const [accidentes, setAccidentes] = useState(null);

  const getAccidentes = () => {
    getAllAccidentes().then((accidentes) => {
      setAccidentes(accidentes);
    });
  };

  useEffect(() => {
    getAccidentes();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dataset = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  accidentes.map(accidente => {
    var mes = accidente.fecha.split('/')[1];
    dataset[mes-1] += 1;
  });
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataset,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
   
    return accidentes === null ? 
      (<div>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row><h1 class="text-white">Loading...</h1></Row>
      </div>) 
      : (
      <div>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row> 
        <Row>
              <Bar options={options} data={data} />
        </Row>
      </div>
    );       
  }