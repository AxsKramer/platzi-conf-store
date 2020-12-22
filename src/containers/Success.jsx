import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../assets/styles/Success.css';

const Success = () => {
  const {state} = useContext(AppContext);
  const location = useGoogleAddress(state.buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{state.buyer[0].name}, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  );
}

export default Success;