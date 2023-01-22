import React from "react";
import ItemCardStyles from "./ItemCardStyles";
import { Link } from "react-router-dom";

interface ItemCardProps {
  itemImage?: string;
  itemTitle?: string;
  itemParagraph?: string;
  itemLink: string;
}

const ItemCard = ({ itemImage, itemTitle, itemParagraph, itemLink }: ItemCardProps) => {
  return (
    <ItemCardStyles>
      <img src={itemImage} />
        <Link to={itemLink}>{itemTitle} &gt;</Link>
    </ItemCardStyles>
  );
};
export default ItemCard;
