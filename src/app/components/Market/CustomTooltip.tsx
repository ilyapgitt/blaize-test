export const CustomTooltip = ({ active, payload, label }: { active: any, payload: any, label: any}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
      <div>
        {payload.map((pld: any) => (
          <div style={{ display: "inline-block", padding: 10, fontSize: '12px', backgroundColor: ''}}>
            <div style={{ color: pld.fill }}>{pld.value}</div>
            <div>{pld.dataKey}</div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  return null;
}