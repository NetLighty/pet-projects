import Filter from "../components/filters/filters";
import dakimakuras from "../components/itemsList/itemsDB";

describe("filter method", () => {
  it("it should return filtered items", () => {
    expect(Filter.filterItemsByGender(dakimakuras)).not.toBeNull();
  });
});
