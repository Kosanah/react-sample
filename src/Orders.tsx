import { useState} from 'react';

export function Orders() {
  const [orders] = useState([{ id: 1, name: 'Order 1', total: 120}]);
  return (<ul>{orders.map(o => <li key={o.id}>{o.name} — ${o.total}</li>)}</ul>);
}
