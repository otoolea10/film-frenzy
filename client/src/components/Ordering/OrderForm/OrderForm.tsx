import React, { useState } from "react";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom";
import OrderFormStyles from "./OrderFormStyles";

export interface OrderSummaryData {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  town: string;
  postcode: string;
}

//Typed properties
interface OrderSummaryProps {
  onSubmit?: (orderSummary: OrderSummaryData) => void;
  orderTotal?: number;
  id: any;
}

const OrderForm = ({ onSubmit, orderTotal = 0, id }: OrderSummaryProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddressOne] = useState("");
  const [address2, setAddressTwo] = useState("");
  const [town, setTown] = useState("");
  const [postcode, setPostCode] = useState("");

  return (
    <OrderFormStyles>
      <div className="order-container">
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <label>Surname</label>
        <input
          type="text"
          id="sname"
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <label>Address Line 1</label>
        <input
          type="text"
          id="address1"
          onChange={(e) => setAddressOne(e.currentTarget.value)}
        />
        <label>Address Line 2</label>
        <input
          type="text"
          id="address2"
          onChange={(e) => setAddressTwo(e.currentTarget.value)}
        />
        <label>Town</label>
        <input
          type="text"
          id="town"
          onChange={(e) => setTown(e.currentTarget.value)}
        />
        <label>Postcode</label>
        <input
          type="text"
          id="postcode"
          onChange={(e) => setPostCode(e.currentTarget.value)}
        />
        <NavLink to={`/order-complete/${id}`}>
          <Button className="order-button" buttonText="Order Now" />
        </NavLink>
      </div>
    </OrderFormStyles>
  );
};
export default OrderForm;
