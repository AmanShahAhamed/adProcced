import React from "react";
import CustomHeader from "./components/customHeader";
import MainContent from "./components/mainContent";
import { ICategory, ICountry, TMutant } from "../store/utilStore";
import api from "../api";

interface IResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

const getCategories = async (): Promise<ICategory[]> => {
  const res = await api.get<IResponse<ICategory[]>>("category");
  if (res.success) return res.data;
  else return [];
};

const getCountry = async (): Promise<ICountry[]> => {
  const res = await api.get<IResponse<ICountry[]>>("country");
  if (res.success) return res.data;
  else return [];
};

const Home = async () => {
  const category = await getCategories();
  const country = await getCountry();
  return (
    <>
      <MainContent category={category} country={country} />
    </>
  );
};

export default Home;
