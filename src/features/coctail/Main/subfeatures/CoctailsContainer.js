import React from "react";
import { useGetCoctailbyNameQuery } from "../../../api/apiSlice";
import CoctailList from "../../Coctails/Coctails";
import "./CoctailsContainer.scss";

const CoctailsContainer = ({ searchedCoctail }) => {
  const { data, error, isLoading } = useGetCoctailbyNameQuery(searchedCoctail);

  console.log(data);

  return (
    <div className="coctailsContainer">
      {error ? (
        <p className="coctailsContainer__error">
          Upps, an unexpected error occurred
        </p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data.drinks !== null ? (
        <>
          <CoctailList coctails={data.drinks} />
        </>
      ) : (
        <p className="coctailsContainer__null">
          Unfortunately, we do not have a recipe for this coctail
        </p>
      )}
    </div>
  );
};

export default CoctailsContainer;
