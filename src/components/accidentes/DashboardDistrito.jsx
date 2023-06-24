import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Container, Badge, CardTitle, Table, Button, Media } from 'reactstrap';
import { AiFillEye, AiOutlineDelete } from "react-icons/ai";
import BarrasAccidentesDistrito from './BarrasAccidentesDistrito.jsx';
import { getAllAccidentes, deleteBookmark } from "../../utils/apicalls.js";
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
            <BarrasAccidentesDistrito/>
        </Row>
      </div>
    );       
  }