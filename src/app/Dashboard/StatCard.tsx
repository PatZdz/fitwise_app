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
    <h3 className="text-base font-medium">{title}</h3>
    <div className="mt-2">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="flex items-center gap-1 text-sm">
        <span className={`${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change.isPositive ? '↑' : '↓'} {change.value}
        </span>
        <span className="text-gray-500">{period}</span>
      </div>
    </div>
  </div>
);

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-4">
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