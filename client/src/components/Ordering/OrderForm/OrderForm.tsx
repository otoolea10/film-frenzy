import React, { FormEvent, useState } from "react";
import Button from "../../Button/ButtonStyles";
import { useNavigate } from "react-router-dom";
import OrderFormStyles from "./OrderFormStyles";

//Typed properties
interface OrderSummaryProps {
  id: any;
}

//The OrderForm component allows the user to enter their details into the basket page
//It uses html labels and inputs to accept firstname, surname, address line 1, address line 2, town, and postcode
const OrderForm = ({ id }: OrderSummaryProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddressOne] = useState("");
  const [address2, setAddressTwo] = useState("");
  const [town, setTown] = useState("");
  const [postcode, setPostCode] = useState("");

  const navigate = useNavigate();

  //Handles page redirect without forcing page reload therefore allowing the browser to validate required fields
  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/order-complete/${id}`);
  };

  return (
    <OrderFormStyles>
      <div className="order-container">
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          onChange={(e) => setFirstName(e.currentTarget.value)}
          required
        />
        <label>Surname</label>
        <input
          type="text"
          id="sname"
          onChange={(e) => setLastName(e.currentTarget.value)}
          required
        />
        <label>Address Line 1</label>
        <input
          type="text"
          id="address1"
          onChange={(e) => setAddressOne(e.currentTarget.value)}
          required
        />
        <label>Address Line 2</label>
        <input
          type="text"
          id="address2"
          onChange={(e) => setAddressTwo(e.currentTarget.value)}
          required
        />
        <label>Town</label>
        <input
          type="text"
          id="town"
          onChange={(e) => setTown(e.currentTarget.value)}
          required
        />
        <label>Postcode</label>
        <input
          type="text"
          id="postcode"
          onChange={(e) => setPostCode(e.currentTarget.value)}
          required
        />
        <Button
          className="order-button"
          children="Order Now"
          type="submit"
          onSubmit={handleSubmit}
        />
      </div>
    </OrderFormStyles>
  );
};
export default OrderForm;
