import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import "./Coctails.scss";
import { Modal } from "react-responsive-modal";

const Coctails = (props) => {
  const [open, setOpen] = useState(false);
  const [drinkDetails, setDrinkDetails] = useState({
    ingredients: [],
    measures: [],
    description: "",
    imgDrink: "",
  });

  const onOpenModal = (coctail) => {
    setOpen(true);

    let fixedDetails = {
      ingredients: [],
      measures: [],
      description: "",
      imgDrink: "",
    };

    fixedDetails.description = coctail.strInstructions;
    fixedDetails.imgDrink = coctail.strDrinkThumb;

    for (const prop in coctail) {
      if (prop.indexOf("strIngredient") > -1 && coctail[prop] !== null) {
        fixedDetails.ingredients.push(coctail[prop]);
      }
      if (prop.indexOf("strMeasure") > -1 && coctail[prop] !== null) {
        fixedDetails.measures.push(coctail[prop]);
      }
    }

    setDrinkDetails(fixedDetails);
  };
  const onCloseModal = () => setOpen(false);

  return (
    <>
      {props.coctails.map((coctail) => {
        return (
          <div
            className="coctails"
            key={coctail.idDrink}
            onClick={() => onOpenModal(coctail)}
          >
            <img
              className="coctails__img"
              src={coctail.strDrinkThumb}
              alt={coctail.strDrink}
            />
            <h4 className="coctails__name">{coctail.strDrink}</h4>
          </div>
        );
      })}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <img className="modalImg" src={drinkDetails.imgDrink} alt="Drink" />
        <h2 className="modalh2">Ingredients </h2>
        <div className="modalDiv">
          <div className="modalDiv__div">
            {drinkDetails.measures.map((measure, id) => {
              return (
                <p className="modalDiv__div--p" key={`Measure${id}`}>
                  {measure}
                </p>
              );
            })}
          </div>
          <div className="modalDiv__div">
            {drinkDetails.ingredients.map((ingredient, id) => {
              return (
                <p className="modalDiv__div--p" key={`Ingridient${id}`}>
                  {ingredient}
                </p>
              );
            })}{" "}
          </div>
        </div>
        <h2 className="modalh2">Recipe</h2>
        <p className="modalp">{drinkDetails.description}</p>
      </Modal>
    </>
  );
};

export default Coctails;
