import '../../styles/Text.css';
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

import imgGraves from '../../images/grave.png';
import imgLeves from '../../images/leve.png';
import imgIngresos from '../../images/ingreso.png';
import imgFallecimientos from '../../images/fallecimiento.png';
import imgTotal from '../../images/total.png';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CardsLesividad(){

  const graves = ['Ingreso superior a 24 horas', 'Asistencia sanitaria inmediata en centro de salud o mutua'];
  const leves = ['Sin asistencia sanitaria', 'Asistencia sanitaria sólo en el lugar del accidente', 'Asistencia sanitaria ambulatoria con posterioridad', 'Atención en urgencias sin posterior ingreso', 'NULL'];
  const ingresos = ['Ingreso superior a 24 horas', 'Ingreso inferior o igual a 24 horas'];
  const fallecimientos = ['Fallecido 24 horas'];
  var contGraves = 0;
  var contLeves = 0;
  var contIngresos = 0;
  var contFallecimientos = 0;


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
    
   
    return accidentes === null ? (
      <Col>
        <div class="loader"></div>
      </Col>
    ) : (
      accidentes.forEach(accidente => {
        if((accidente.lesividad !== null)) {
            if(graves.indexOf(accidente.lesividad) !== -1){
                contGraves += 1;
            } else if(leves.indexOf(accidente.lesividad) !== -1){
                contLeves += 1;
            } else if(ingresos.indexOf(accidente.lesividad) !== -1){
                contIngresos += 1;
            } else if(fallecimientos.indexOf(accidente.lesividad) !== -1){
                contFallecimientos += 1;
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
                                <img src={imgLeves} alt='leves' width={80} height={80}/>
                            </Col>
                            <Col>
                                <h3 class="rightRed"><strong>{contLeves}</strong></h3>
                                <h5 class="right">Leves</h5> 
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
                                <img src={imgGraves} alt='graves' width={80} height={80}/>
                            </Col>
                            <Col>
                                <h3 class="rightRed"><strong>{contGraves}</strong></h3>
                                <h5 class="right">Graves</h5> 
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
                                <img src={imgIngresos} alt='ingresos' width={80} height={80}/>
                            </Col>
                            <Col>
                                <h3 class="rightRed"><strong>{contIngresos}</strong></h3>
                                <h5 class="right">Ingresos</h5> 
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
                                <img src={imgFallecimientos} alt='fallecimientos' width={80} height={80}/>
                            </Col>
                            <Col>
                                <h3 class="rightRed"><strong>{contFallecimientos}</strong></h3>
                                <h5 class="right">Fallecimientos</h5> 
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
                                <img src={imgTotal} alt='total' width={80} height={80}/>
                            </Col>
                            <Col>
                                <h3 class="rightRed"><strong>{accidentes.length}</strong></h3>
                                <h5 class="right">Total</h5> 
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </Row>
      </div>
    );       
  }