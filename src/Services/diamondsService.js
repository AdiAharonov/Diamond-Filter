import * as diamonds from '../diamons.json';

const query = (filterBy) => {
  const {
    Shape,
    Carat,
    Color,
    Clarity,
    Cut,
    Polish,
    Symmetry,
    Flour,
  } = filterBy;
  if (
    !Shape &&
    Carat.maxCarat === 0 &&
    Carat.minCarat === 0 &&
    !Color &&
    !Clarity &&
    !Cut &&
    !Polish &&
    !Symmetry &&
    !Flour
  )
    return diamonds.default;
  else {
    const { maxCarat, minCarat } = Carat;
    return diamonds.default.filter(
      (diamond) =>
        diamond.Shape.includes(Shape) &&
        diamond.Symmetry.includes(Symmetry) &&
        diamond.Color.includes(Color) &&
        diamond.Clarity.includes(Clarity) &&
        diamond.Cut.includes(Cut) &&
        diamond.Polish.includes(Polish) &&
        diamond.Fluorescent.includes(Flour) &&
        +diamond.Carat <= maxCarat &&
        +diamond.Carat >= minCarat
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
