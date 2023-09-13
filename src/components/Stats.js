export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to you packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const persentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {persentPacked === 100
          ? "You have packed everything! Let's go! 🚀"
          : `You have ${numItems} items on yout list, and you alredy packed ${numPacked} (${persentPacked}%)`}
      </em>
    </footer>
  );
}
