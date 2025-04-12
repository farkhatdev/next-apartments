import React from "react";
import "../apartments.css";
import DATA from "@/utils/data";
import Apartment from "@/components/Apartment/Apartment";

interface IApartments {
  img: string;
  name: string;
  id: number;
  type: string;
  price: number;
}

const LongTermPage = () => {
  return (
    <div className="apartments">
      {DATA &&
        DATA.map((apartment: IApartments) => {
          return <Apartment key={apartment.id} apartment={apartment} />;
        })}
    </div>
  );
};

export default LongTermPage;
