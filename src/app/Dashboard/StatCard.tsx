interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  period: string;
}

const StatCard = ({ title, value, change, period }: StatCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h3 className="text-base font-medium text-gray-600">{title}</h3>
    <div className="mt-2">
      <div className="text-2xl md:text-3xl font-semibold mb-1">{value}</div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-1.5">
        <span className={`${change.isPositive ? 'text-green-600' : 'text-red-600'} text-sm md:text-base font-medium`}>
          {change.isPositive ? '↑' : '↓'} {change.value}
        </span>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
    </div>
  </div>
);

export default function Stats() {
  return (
    <div className="flex md:grid md:grid-cols-3 gap-3 mb-6 overflow-x-auto pb-4 md:pb-2 -mx-4 px-4 snap-x snap-mandatory relative">
      <StatCard
        title="Klienci"
        value="120"
        change={{ value: "40%", isPositive: true }}
        period="vs ostatni miesiąc"
      />
      <StatCard
        title="Pracownicy"
        value="15"
        change={{ value: "40%", isPositive: true }}
        period="vs ostatni miesiąc"
      />
      <StatCard
        title="Zajęcia"
        value="120"
        change={{ value: "40%", isPositive: true }}
        period="vs ostatni miesiąc"
      />
    </div>
  );
}