import { Card } from "./Card";

export function Cardgrid() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
