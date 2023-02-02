import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Link } from "react-router-dom";

//typed properties of the component
interface ItemCardProps {
  itemImage?: string;
  itemTitle?: string;
  itemParagraph?: string;
  itemLink: string;
}

const ItemCard = ({
  itemImage,
  itemTitle,
  itemParagraph,
  itemLink,
}: ItemCardProps) => {
  //ItemCard displays the film's image, title, and allows the user to click on it to view more details in the single view page
  return (
    <ItemCardStyles>
      <img src={itemImage} />
      <Link to={itemLink}>{itemTitle} &gt;</Link>
    </ItemCardStyles>
  );
};
export default ItemCard;
