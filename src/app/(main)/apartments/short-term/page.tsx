import Apartment from "@/components/Apartment/Apartment";
import "../apartments.css";
import React from "react";
import DATA from "@/utils/data";

interface IApartments {
  img: string;
  name: string;
  id: number;
  type: string;
  price: number;
}

const ShortTermPage = () => {
  return (
    <div className="apartments">
      {DATA &&
        DATA.map((apartment: IApartments) => {
          return <Apartment key={apartment.id} apartment={apartment} />;
        })}
    </div>
  );
};

export default ShortTermPage;
