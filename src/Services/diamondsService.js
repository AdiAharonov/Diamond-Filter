import * as diamonds from '../diamonds.json';

const query = (filterBy, caratRange) => {
  console.log(caratRange);
  const { Shape, Color, Clarity, Cut, Polish, Symmetry, Flour } = filterBy;
  if (
    !Shape &&
    !Color &&
    !Clarity &&
    !Cut &&
    !Polish &&
    !Symmetry &&
    !Flour &&
    !caratRange
  )
    return diamonds.default;
  else {
    return diamonds.default.filter(
      (diamond) =>
        (Shape === '' || Shape.includes(diamond.Shape)) &&
        (Symmetry === '' || Symmetry.includes(diamond.Symmetry)) &&
        (Color === '' || Color.includes(diamond.Color)) &&
        (Clarity === '' || Clarity.includes(diamond.Clarity)) &&
        (Cut === '' || Cut.includes(diamond.Cut)) &&
        (Polish === '' || Polish.includes(diamond.Polish)) &&
        (Flour === '' || Flour.includes(diamond.Fluorescent)) &&
        +diamond.Carat <= caratRange[1] &&
        +diamond.Carat >= caratRange[0]
    );
  }
};

const getTotalPrice = (currDiamonds) => {
  let totalPrice = 0;
  currDiamonds.forEach((diamond) => (totalPrice += +diamond.Total_Price));
  return totalPrice;
};

export const diamondService = {
  query,
  getTotalPrice,
};
