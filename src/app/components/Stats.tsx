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
    <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-semibold">{value}</span>
      <span className={`text-sm ${change.isPositive ? 'text-green-500' : 'text-red-500'}`}>
        {change.isPositive ? '↑' : '↓'} {change.value}
      </span>
    </div>
    <p className="text-gray-400 text-xs mt-1">{period}</p>
  </div>
);

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        title="Zarobki"
        value="21020 zł"
        change={{ value: '40%', isPositive: true }}
        period="vs ostatni miesiąc"
      />
      <StatCard
        title="Klienci"
        value="64"
        change={{ value: '+4', isPositive: true }}
        period="vs ostatni miesiąc"
      />
      <StatCard
        title="Liczba wejść"
        value="128"
        change={{ value: '-12', isPositive: false }}
        period="vs ostatni miesiąc"
      />
      <StatCard
        title="Liczba zajęć"
        value="19"
        change={{ value: '+2', isPositive: true }}
        period="vs ostatni miesiąc"
      />
    </div>
  );
}