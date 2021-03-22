export const initWebSocket = (setCurrentRate, setWs) => {
  const ws = new WebSocket('wss://ws.bitstamp.net');

  ws.onopen = () => {
    subscribe(ws);
    setWs(ws);
  };

  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    switch (response.event) {
      case 'data':
        updateRate(response.data, setCurrentRate);
        break;
      case 'bts:request-reconnect':
        initWebSocket();
        break;
    }
  };
};

const subscribe = (ws) => {
  const msg = {
    event: 'bts:subscribe',
    data: {
      channel: 'order_book_btcusd',
    },
  };
  ws.send(JSON.stringify(msg));
};

const updateRate = (data, setCurrentRate) => {
  const ask = parseInt(data.asks[data.asks.length - 1][0]);
  const bid = parseInt(data.bids[data.bids.length - 1][0]);
  const rate = (ask + bid) / 2;
  setCurrentRate(rate);
};

export const closeWs = (ws, setWs) => {
  ws.close();
  setWs(null);
};
