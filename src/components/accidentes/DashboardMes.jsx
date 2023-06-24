import React, { useState, useEffect } from 'react';

import '../../styles/Loader.css';
import { Row, Col } from 'reactstrap';
import BarrasAccidentesMes from './BarrasAccidentesMes.jsx';
import { getAllAccidentes } from "../../utils/apicalls.js";
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

export default function Dashboard(){

  const [accidentes, setAccidentes] = useState(null);

  const getAccidentes = () => {
    getAllAccidentes().then((accidentes) => {
      setAccidentes(accidentes);
    });
  };

  useEffect(() => {
    getAccidentes();
  }, []);

  
    return accidentes === null ? 
      (<div>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="loader"></div>
          </Col>
        </Row>
      </div>) 
      : (
      <div>
        <Row>
          <Col>
            <Header/>
          </Col>
        </Row> 
        <Row>
          <Col>
            <BarrasAccidentesMes/>
          </Col>
        </Row>
      </div>
    );       
  }