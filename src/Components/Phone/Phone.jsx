import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Phone = () => {
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setPhone(phoneWithFakeData);
      });
  }, []);
  return (
    <div>
      <h1>Phone : {phone.length}</h1>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={phone}>
          <Bar dataKey="name" fill="#8884d8" />
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Phone;
