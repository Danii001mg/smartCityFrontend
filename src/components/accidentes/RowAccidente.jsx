import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Media, Button } from 'reactstrap';
import { AiFillEye, AiFillSignal, AiFillAppstore, AiTwotoneCalendar, AiOutlineStar } from "react-icons/ai";

export default function CardMovie({ accidente }){

  const navigate = useNavigate();

  return(
          <tr>
            <td>{accidente.fecha} {accidente.hora}</td>
            <td>{accidente.localizacion}</td>
            <td>{accidente.distrito}</td>
            <td>{accidente.tipo_accidente}</td>
            <td>{accidente.tipo_vehiculo}</td>
            <td>{accidente.tipo_persona}</td>
            <td>{accidente.rango_edad}</td>
            <td>{accidente.sexo}</td>
            <td>{accidente.lesividad}</td>
            <td>{accidente.positiva_alcohol}</td>
            <td>{accidente.positiva_droga}</td>
          </tr>
  );
}