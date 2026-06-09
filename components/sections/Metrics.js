const METRICS = [
  { num: '847', plus: true, label: 'Events Performed', delay: '' },
  { num: '18', plus: false, label: 'Years Active', delay: 'd1' },
  { num: '620', plus: true, label: 'Happy Clients', delay: 'd2' },
  { num: '12', plus: true, label: 'Cities Served', delay: 'd3' },
];

export default function Metrics() {
  return (
    <section className="section wrap" aria-label="By the numbers">
      <div className="metrics">
        {METRICS.map((m) => (
          <div className={`metric reveal${m.delay ? ' ' + m.delay : ''}`} key={m.label}>
            <div className="num">
              {m.num}
              {m.plus && <span>+</span>}
            </div>
            <div className="label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
