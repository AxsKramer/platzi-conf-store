import React, {useContext} from 'react';
import {PayPalButton} from 'react-paypal-button';
// import {useHistory} from 'react-router-dom';
import '../assets/styles/Payment.css';
import AppContext from '../context/AppContext';

const Payment = ({history}) => {

  const {state, addNewOrder} = useContext(AppContext);

  // const history = useHistory()

  const paypalOptions = {
    clientId: 'ATN4MgsCVKSXinkSTL1YqlANTikW5fXyo5C7TkyVUG7JB0DTr1G2aabkWFF9Uz6kKo61tL48cfWpomc4',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }

  const handleSuccess = data => {
    if(data.status === "COMPLETED"){
      const newOrder = {
        buyer: state.buyer,
        product: state.cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {
          state.cart.map(item => (
            <div className="Payment-item" key={item.id}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>$ {''} {item.price}</span>
              </div>
            </div>
          ))
        }
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handleSuccess(data)}       
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
}

export default Payment;