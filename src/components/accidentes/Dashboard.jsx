import React, { useState, useEffect } from 'react';

import '../../styles/Loader.css';
import '../../styles/Cards.css'
import { Row, Col, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CardsLesividad from './CardsLesividad.jsx';
import CardsSexoAlcohol from './CardsSexoAlcohol.jsx';
import BarrasAccidentesEdad from './BarrasAccidentesEdad.jsx';
import TreemapAccidentesTipo from './TreemapAccidentesTipo.jsx';
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
            <CardsLesividad/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card class={"bg-light mb-3 top"}>
              <CardBody>
                <BarrasAccidentesEdad/>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card class={"bg-light mb-3 top"}>
              <CardBody>
                <TreemapAccidentesTipo/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <CardsSexoAlcohol/>
          </Col>
        </Row>
      </div>
    );       
  }