import _ from "lodash";

export const paginate = (items, pageNumber, ItemPerPage) => {
  const startIndex = (pageNumber - 1) * ItemPerPage;
  return _(items).slice(startIndex).take(ItemPerPage).value();
};
