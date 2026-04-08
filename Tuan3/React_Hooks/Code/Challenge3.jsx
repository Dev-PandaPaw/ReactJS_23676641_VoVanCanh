import { useMemo, useState } from "react";

const createMockProducts = () => {
  const names = ["Phone", "Laptop", "Mouse", "Keyboard", "Headphone", "Camera", "Monitor", "Tablet"];

  return Array.from({ length: 2500 }, (_, i) => ({
    id: i + 1,
    name: `${names[i % names.length]} ${i + 1}`,
    price: Math.floor(Math.random() * 9000) + 100,
  }));
};

const filterAndSortProducts = (products, keyword, minPrice, maxPrice, sortBy) => {
  let result = products.filter((item) => {
    const matchName = item.name.toLowerCase().includes(keyword.toLowerCase());
    const matchMin = minPrice === "" ? true : item.price >= Number(minPrice);
    const matchMax = maxPrice === "" ? true : item.price <= Number(maxPrice);
    return matchName && matchMin && matchMax;
  });

  if (sortBy === "name") {
    result = result.slice().sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortBy === "price_asc") {
    result = result.slice().sort((a, b) => a.price - b.price);
  }

  if (sortBy === "price_desc") {
    result = result.slice().sort((a, b) => b.price - a.price);
  }

  return result;
};

function Challenge3() {
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [tick, setTick] = useState(0);

  const products = useMemo(() => createMockProducts(), []);

  // truoc toi uu: tinh lai moi lan render
  const startBefore = performance.now();
  const rawList = filterAndSortProducts(products, keyword, minPrice, maxPrice, sortBy);
  const rawTotal = rawList.reduce((sum, item) => sum + item.price, 0);
  const beforeMs = performance.now() - startBefore;
  console.log(`[before useMemo] ${beforeMs.toFixed(2)} ms`);

  // sau toi uu: chi tinh lai khi deps doi
  const { filteredProducts, totalPrice } = useMemo(() => {
    const startAfter = performance.now();
    const list = filterAndSortProducts(products, keyword, minPrice, maxPrice, sortBy);
    const total = list.reduce((sum, item) => sum + item.price, 0);
    const afterMs = performance.now() - startAfter;
    console.log(`[after useMemo] ${afterMs.toFixed(2)} ms`);

    return {
      filteredProducts: list,
      totalPrice: total,
    };
  }, [products, keyword, minPrice, maxPrice, sortBy]);

  return (
    <div style={{ maxWidth: 900, margin: "20px auto" }}>
      <h2>Challenge 3 - Product Filter + Tong tien</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Search name"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by name</option>
          <option value="price_asc">Price low to high</option>
          <option value="price_desc">Price high to low</option>
        </select>

        <button onClick={() => setTick((v) => v + 1)}>Force render ({tick})</button>
      </div>

      <p>Filtered: {filteredProducts.length} items</p>
      <p>Total (memo): {totalPrice.toLocaleString()} VND</p>
      <p style={{ color: "#666" }}>Total (raw): {rawTotal.toLocaleString()} VND</p>

      <div style={{ maxHeight: 260, overflow: "auto", border: "1px solid #ddd", padding: 10 }}>
        {filteredProducts.slice(0, 60).map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0" }}>
            <span>{item.name}</span>
            <strong>{item.price.toLocaleString()} VND</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Challenge3;
