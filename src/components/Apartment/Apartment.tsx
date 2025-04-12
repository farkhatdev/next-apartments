import React from "react";
import "./apartment.css";

// Icons
import { SlShareAlt } from "react-icons/sl";
import { CiBookmark } from "react-icons/ci";
import { VscCallOutgoing } from "react-icons/vsc";
import Image from "next/image";

interface Apartments {
  img: string;
  id: number;
  type: string;
  price: number;
}
const Apartment = ({ apartment }: { apartment: Apartments }) => {
  const { img, type, price } = apartment;

  return (
    <div className="apartment">
      <span className="apartment-duration-type">20, Dec</span>
      <div className="apartment-head">
        <div className="apartment-img">
          <Image
            src={img}
            placeholder="blur"
            alt="Apartments"
            width={300}
            height={300}
            blurDataURL="https://img.freepik.com/free-vector/soft-clear-blurred-background_1034-596.jpg?semt=ais_hybrid"
          />
        </div>
      </div>
      <div className="apartment-body">
        <div className="apartment-informations">
          <div className="apartment-info-row">
            <span className="apartment-info-row-key">Address: </span>
            <p>Mega Nukus</p>
          </div>
          <div className="apartment-info-row">
            <span className="apartment-info-row-key">Full Address: </span>
            <p>Aydin jol MPJ</p>
          </div>
          <div className="apartment-info-row">
            <span className="apartment-info-row-key">For: </span>
            <p>{type}</p>
          </div>
          <div className="apartment-info-row">
            <span className="apartment-info-row-key">Price: </span>
            <p>{price} </p>
          </div>
        </div>
        <div className="apartment-btns">
          <button className="apartment-btn">
            <SlShareAlt size={19} />
          </button>
          <button className="apartment-btn">
            <CiBookmark size={21} />
          </button>
          <button className="apartment-btn">
            <VscCallOutgoing size={21} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
