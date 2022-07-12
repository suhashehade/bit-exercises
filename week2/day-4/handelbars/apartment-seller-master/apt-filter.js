const must = (radio) => radio.filter((rb) => rb.checked).length;

const findRelevantApts = function (
  address,
  minPrice,
  maxPrice,
  minRooms,
  maxRooms,
  immediate,
  parking
) {
  let relevantApts = apartments.filter(
    (apartment) =>
      apartment.address.toLowerCase().includes(address.toLowerCase() || "") &&
      apartment.price >= (minPrice || 0) &&
      apartment.price <= (maxPrice || apartment.price) &&
      apartment.rooms >= (minRooms || 0) &&
      apartment.rooms <= (maxRooms || apartment.rooms)
  );

  immediate = !immediate[0].checked;
  parking = !parking[0].checked;

  relevantApts = parking
    ? relevantApts
    : relevantApts.filter((apartment) => apartment.parking);
  return immediate
    ? relevantApts
    : relevantApts.filter((apartment) => apartment.immediate);
};
