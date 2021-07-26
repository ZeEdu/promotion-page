import React, { FC } from "react";
import { Promotion } from "../../interfaces/Promotion";
import PromotionItem from "../PromotionItem/PromotionItem";

type Props = {
  promotions: Promotion[];
};

const PromotionList: FC<Props> = ({ promotions }) => {
  return (
    <>
      {promotions.map((promotion) => (
        <PromotionItem key={promotion.id} promotion={promotion} />
      ))}
    </>
  );
};

export default PromotionList;
