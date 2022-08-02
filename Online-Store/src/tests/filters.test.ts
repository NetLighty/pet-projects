import Filter from "../scripts/filters";
import dakimakuras from "../data/itemsDB";

describe("filter method", () => {
  it("it should return filtered items", () => {
    expect(Filter.filterItemsByGender(dakimakuras)).not.toBeNull();
  });
});
