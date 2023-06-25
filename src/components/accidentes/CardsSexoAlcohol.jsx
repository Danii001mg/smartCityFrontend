import '../../styles/Text.css';
import '../../styles/Images.css';
import '../../styles/Cards.css';
import {React, useState, useEffect } from 'react';
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
import { Col, Row, Card, CardBody } from "reactstrap";

import imgHombre from '../../images/hombre.png';
import imgMujer from '../../images/mujer.png';
import imgAlcohol from '../../images/alcohol.png';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CardsSexoAlcohol(){

  const sexo = ['Hombre', 'Mujer'];
  const alcohol = ['S', 'N'];
  var contHombres = 0;
  var contMujeres = 0;
  var contPositivoAlcohol = 0;


  const [accidentes, setAccidentes] = useState(null);

  const getAccidentes = () => {
    getAllAccidentes().then((accidentes) => {
      setAccidentes(accidentes);
    });
  };

  useEffect(() => {
    getAccidentes();
  }, []);
    
   
    return accidentes === null ? (
      <Col>
        <div class="loader"></div>
      </Col>
    ) : (
      accidentes.forEach(accidente => {
        if((accidente.sexo !== null)) {
            if(accidente.sexo === sexo[0]){
                contHombres += 1;
            } else if(accidente.sexo === sexo[1]){
                contMujeres += 1;
            }
        }
        if((accidente.positiva_alcohol !== null)) {
            if(accidente.positiva_alcohol === alcohol[0]){
                contPositivoAlcohol += 1;
            } 
        }
      }),
      <div>
        <Row>
            <Col>
                <Card class={"bg-light mb-3 top"}>
                    <CardBody>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <img src={imgHombre} alt="Hombre" height="190" class="ImgLeft"/>
                                    </Col>
                                    <Col>
                                        <h3 class="verticalCenterLeft"><strong>{Math.round(((contHombres)/(contHombres+contMujeres))*100)} %</strong></h3>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    <Col>
                                        <h3 class="verticalCenterRight"><strong>{Math.round(((contMujeres)/(contHombres+contMujeres))*100)} %</strong></h3>
                                    </Col>
                                    <Col>
                                        <img src={imgMujer} alt="Mujer" height="200" class="ImgRight"/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card class={"bg-light mb-3 top"}>
                    <CardBody>
                        <Row>
                            <Col>
                                <img src={imgAlcohol} alt="Alcohol" height="205" class="ImgRight"/>
                            </Col>
                            <Col>
                                <h3 class="verticalCenter2"><strong>{Math.round(((contPositivoAlcohol)/(accidentes.length))*100)} %</strong></h3>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
    );       
  }