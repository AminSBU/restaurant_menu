import { useState } from 'react';

function SendItems() {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      itemName,
      quantity,
    };

    console.log('Sending item:', newItem);

    // here you can send data to backend or API
    setItemName('');
    setQuantity('');
  };

  return (
    <div style={{ marginLeft: '280px', padding: '20px' }}>
      <h2>Send Items</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{ padding: '10px' }}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ padding: '10px' }}
        />

        <button type="submit" style={{ padding: '10px', background: '#13395e', color: 'white' }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default SendItems;