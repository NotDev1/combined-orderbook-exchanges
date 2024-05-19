    async function fetchAscendex(symbol, sliceSize) {
        const url = `https://ascendex.com/api/pro/v1/depth?symbol=${symbol}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.data && Array.isArray(data.data.data.asks) && Array.isArray(data.data.data.bids)) {
                const asks = data.data.data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
                const bids = data.data.data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
                asks.sort((a, b) => a[0] - b[0]);
                bids.sort((a, b) => b[0] - a[0]);
                return { exchange: 'Ascendex', symbol, asks, bids };
            } else {
                console.error('Error fetching data from Ascendex:', data);
                return null; // Return null to indicate data retrieval failure
            }
        } catch (error) {
            console.error('Error fetching data from Ascendex:', error);
            return null; // Return null to indicate data retrieval failure
        }
    }


    async function fetchAzbit(symbol, sliceSize) {
        const url = `https://data.azbit.com/api/orderbook?currencyPairCode=${symbol}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const asks = data.filter(item => !item.isBid).slice(0, sliceSize).map(item => [parseFloat(item.price), parseFloat(item.amount)]);
            const bids = data.filter(item => item.isBid).slice(0, sliceSize).map(item => [parseFloat(item.price), parseFloat(item.amount)]);
            return { exchange: 'Azbit', symbol, asks, bids };
        } catch (error) {
            console.error('Error fetching data from Azbit:', error);
            return null;
        }
    }

    async function fetchBequant(symbol, sliceSize) {
        const url = `https://api.bequant.io/api/3/public/orderbook/${symbol}?&depth=100`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const asks = data.ask.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
            const bids = data.bid.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
            asks.sort((a, b) => a[0] - b[0]);
            bids.sort((a, b) => b[0] - a[0]);
            return { exchange: 'Bequant', symbol, asks, bids };
        } catch (error) {
            console.error('Error fetching data from Bequant:', error);
        }
    }

	async function fetchBigOne(symbol, sliceSize) {
		const url = `https://big.one/api/v3/asset_pairs/${symbol}/depth`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.code === 0 && data.data && Array.isArray(data.data.bids) && Array.isArray(data.data.asks)) {
				const asks = data.data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask.price), parseFloat(ask.quantity)]);
				const bids = data.data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid.price), parseFloat(bid.quantity)]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'BigOne', symbol, asks, bids };
			} else {
				console.error('Error fetching data from BigOne:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from BigOne:', error);
			return null;
		}
	}


    async function fetchBinance(symbol, sliceSize) {
        const url = `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=100`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
            const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
            asks.sort((a, b) => a[0] - b[0]);
            bids.sort((a, b) => b[0] - a[0]);
            return { exchange: 'Binance', symbol, asks, bids };
        } catch (error) {
            console.error('Error fetching data from Binance:', error);
        }
    }

	async function fetchBinanceUS(symbol, sliceSize) {
		const url = `https://api.binance.us/api/v3/depth?symbol=${symbol}&limit=100`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && Array.isArray(data.bids) && Array.isArray(data.asks)) {
				const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'BinanceUS', symbol, asks, bids };
			} else {
				console.error('Error fetching data from BinanceUS:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from BinanceUS:', error);
			return null;
		}
	}

	async function fetchBitbns(symbol, sliceSize) {
		const url = `https://bitbns.com/order/fetchOrderbook?symbol=${symbol}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && Array.isArray(data.bids) && Array.isArray(data.asks)) {
				const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Bitbns', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitbns:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitbns:', error);
			return null;
		}
	}

	async function fetchBitdelta(symbol, sliceSize) {
		const url = `https://api.bitdelta.com/open/api/v1/orderbook?symbol=${symbol}&level=2&depth=100`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.bids && Array.isArray(data.bids) && data.asks && Array.isArray(data.asks)) {
				const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Bitdelta', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitdelta:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitdelta:', error);
			return null;
		}
	}

	async function fetchBitfinex(symbol, sliceSize) {
		const url = `https://api-pub.bitfinex.com/v2/book/t${symbol}/P0?len=100`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && Array.isArray(data) && data.length > 0) {
				const asks = data.filter(item => item[2] < 0).slice(0, sliceSize).map(item => [parseFloat(item[0]), parseFloat(-item[2])]);
				const bids = data.filter(item => item[2] > 0).slice(0, sliceSize).map(item => [parseFloat(item[0]), parseFloat(item[2])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Bitfinex', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitfinex:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitfinex:', error);
			return null;
		}
	}

	async function fetchBitget(symbol, sliceSize) {
		const url = `https://api.bitget.com/api/v2/spot/market/orderbook?symbol=${symbol}`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData.code === '00000' && responseData.data && Array.isArray(responseData.data.asks) && Array.isArray(responseData.data.bids)) {
				const asks = responseData.data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = responseData.data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Bitget', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitget:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitget:', error);
			return null;
		}
	}


    async function fetchBitmart(symbol, sliceSize) {
        const url = `https://api-cloud.bitmart.com/spot/quotation/v3/books?symbol=${symbol}&limit=100`;
        try {
            const response = await fetch(url);
            const dataString = await response.text(); // Convert the ReadableStream to a string
            const data = JSON.parse(dataString); // Parse the string as JSON
            if (data.data && Array.isArray(data.data.asks) && Array.isArray(data.data.bids)) {
                const asks = data.data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
                const bids = data.data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
                asks.sort((a, b) => a[0] - b[0]);
                bids.sort((a, b) => b[0] - a[0]);
                return { exchange: 'Bitmart', symbol, asks, bids };
            } else {
                console.error('Error: Asks or bids data is missing or not in the expected format.');
                return null;
            }
        } catch (error) {
            console.error('Error fetching data from Bitmart:', error);
            return null;
        }
    }

	async function fetchBitso(symbol, sliceSize) {
		const url = `https://sandbox.bitso.com/api/v3/order_book/?book=${symbol}`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData.success && responseData.payload && Array.isArray(responseData.payload.bids) && Array.isArray(responseData.payload.asks)) {
				const asks = responseData.payload.asks.slice(0, sliceSize).map(ask => [parseFloat(ask.price), parseFloat(ask.amount)]);
				const bids = responseData.payload.bids.slice(0, sliceSize).map(bid => [parseFloat(bid.price), parseFloat(bid.amount)]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Bitso', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitso:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitso:', error);
			return null;
		}
	}

	async function fetchBitstamp(symbol, sliceSize) {
		const url = `https://www.bitstamp.net/api/v2/order_book/${symbol}`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData.bids && Array.isArray(responseData.bids)) {
				const bids = responseData.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				const asks = responseData.asks.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				return { exchange: 'Bitstamp', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitstamp:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitstamp:', error);
			return null;
		}
	}

	async function fetchBitvavo(symbol, sliceSize) {
		const url = `https://api.bitvavo.com/v2/${symbol}/book`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData && responseData.bids && Array.isArray(responseData.bids) && responseData.asks && Array.isArray(responseData.asks)) {
				const asks = responseData.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = responseData.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				return { exchange: 'Bitvavo', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Bitvavo:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Bitvavo:', error);
			return null;
		}
	}

	async function fetchBybit(symbol, sliceSize) {
		const url = `https://api.bybit.com/v5/market/orderbook?category=spot&symbol=${symbol}&limit=100`;
		try {
			const response = await fetch(url);
			const jsonData = await response.json();
			const data = jsonData.result;

			const asks = data.a.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
			const bids = data.b.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
			asks.sort((a, b) => a[0] - b[0]);
			bids.sort((a, b) => b[0] - a[0]);

			return { exchange: 'Bybit', symbol, asks, bids };
		} catch (error) {
			console.error('Error fetching data from Bybit:', error);
		}
	}

	async function fetchCoinbase(symbol, sliceSize) {
		const url = `https://api.exchange.coinbase.com/products/${symbol}/book?level=2`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData && responseData.bids && Array.isArray(responseData.bids) && responseData.asks && Array.isArray(responseData.asks)) {
				const asks = responseData.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = responseData.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Coinbase', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Coinbase:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Coinbase:', error);
			return null;
		}
	}

	async function fetchCoinex(symbol, sliceSize) {
		const url = `https://api.coinex.com/v2/spot/depth?market=${symbol}&limit=50&interval=0.00000000001`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData && responseData.code === 0 && responseData.data && responseData.data.depth && Array.isArray(responseData.data.depth.asks) && Array.isArray(responseData.data.depth.bids)) {
				const asks = responseData.data.depth.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = responseData.data.depth.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Coinex', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Coinex:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Coinex:', error);
			return null;
		}
	}

	async function fetchDelta(symbol, sliceSize) {
		const url = `https://api.delta.exchange/v2/l2orderbook/${symbol}`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData && responseData.result && Array.isArray(responseData.result.buy) && Array.isArray(responseData.result.sell)) {
				const asks = responseData.result.sell.slice(0, sliceSize).map(ask => [parseFloat(ask.price), parseFloat(ask.size)]);
				const bids = responseData.result.buy.slice(0, sliceSize).map(bid => [parseFloat(bid.price), parseFloat(bid.size)]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Delta', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Delta:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Delta:', error);
			return null;
		}
	}

	async function fetchDigifinex(symbol, sliceSize) {
		const url = `https://openapi.digifinex.com/v3/order_book?&symbol=${symbol}&limit=${sliceSize}`;
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			if (responseData && responseData.bids && Array.isArray(responseData.bids) && responseData.asks && Array.isArray(responseData.asks)) {
				const asks = responseData.asks.map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = responseData.bids.map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Digifinex', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Digifinex:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Digifinex:', error);
			return null;
		}
	}

	async function fetchExmo(symbol, sliceSize) {
		const url = `https://api.exmo.com/v1.1/order_book?&pair=${symbol}`;
		try {
			const response 	= await fetch(url);
			const responseData = await response.json();
			const orderBook = responseData[symbol];
			if (orderBook && orderBook.ask && Array.isArray(orderBook.ask) && orderBook.bid && Array.isArray(orderBook.bid)) {
				const asks = orderBook.ask.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = orderBook.bid.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Exmo', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Exmo:', responseData);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Exmo:', error);
			return null;
		}
	}

    async function fetchFmfw(symbol, sliceSize) {
        const url = `https://api.fmfw.io/api/3/public/orderbook/${symbol}?&depth=100`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            const asks = data.ask.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
            const bids = data.bid.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
            asks.sort((a, b) => a[0] - b[0]);
            bids.sort((a, b) => b[0] - a[0]);
            return { exchange: 'Fmfw', symbol, asks, bids };
        } catch (error) {
            console.error('Error fetching data from Bequant:', error);
        }
    }

	async function fetchGateio(symbol, sliceSize) {
		const url = `https://api.gateio.ws/api/v4/spot/order_book?&currency_pair=${symbol}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && Array.isArray(data.asks) && Array.isArray(data.bids)) {
				const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Gateio', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Gateio:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Gateio:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchHitbtc(symbol, sliceSize) {
		const url = `https://api.hitbtc.com/api/3/public/orderbook/${symbol}?&depth=0`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && Array.isArray(data.ask) && Array.isArray(data.bid)) {
				const asks = data.ask.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.bid.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Hitbtc', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Hitbtc:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Hitbtc:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchHuobi(symbol, sliceSize) {
		const url = `https://api.huobi.pro/market/depth?symbol=${symbol}&type=step0`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.status === 'ok' && data.tick && Array.isArray(data.tick.asks) && Array.isArray(data.tick.bids)) {
				const asks = data.tick.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.tick.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Huobi', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Huobi:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Huobi:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchKraken(symbol, sliceSize) {
		const url = `https://api.kraken.com/0/public/Depth?pair=${symbol}&count=500`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.error && data.error.length === 0 && data.result) {
				const resultKey = Object.keys(data.result)[0];
				if (resultKey) {
					const asks = data.result[resultKey].asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
					const bids = data.result[resultKey].bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
					asks.sort((a, b) => a[0] - b[0]);
					bids.sort((a, b) => b[0] - a[0]);
					return { exchange: 'Kraken', symbol, asks, bids };
				} else {
					console.error('Error fetching data from Kraken: No result key found');
					return null; // Return null to indicate data retrieval failure
				}
			} else {
				console.error('Error fetching data from Kraken:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Kraken:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchKucoin(symbol, sliceSize) {
		const url = `https://api.kucoin.com/api/v1/market/orderbook/level2_100?symbol=${symbol}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.code === '200000' && data.data) {
				const asks = data.data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Kucoin', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Kucoin:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Kucoin:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}


	async function fetchMEXC(symbol, sliceSize) {
		const url = `https://api.mexc.com/api/v3/depth?symbol=${symbol}&limit=100`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			const asks = data.asks.slice(0, sliceSize).map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]); // [price, quantity]
			const bids = data.bids.slice(0, sliceSize).map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]); // [price, quantity]
			// Sort asks by price in ascending order and bids by price in descending order
			asks.sort((a, b) => a[0] - b[0]);
			bids.sort((a, b) => b[0] - a[0]);
			return { exchange: 'MEXC', symbol, asks, bids };
		} catch (error) {
			console.error('Error fetching data from MEXC:', error);
		}
	}

	async function fetchPhemex(symbol, sliceSize) {
		const url = `https://api.phemex.com/md/orderbook?symbol=${symbol}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.error === null && data.result && data.result.book) {
				const asks = data.result.book.asks.slice(0, sliceSize).map(ask => [ask[0] / 10000, ask[1]]);
				const bids = data.result.book.bids.slice(0, sliceSize).map(bid => [bid[0] / 10000, bid[1]]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Phemex', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Phemex:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Phemex:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchPoloniex(symbol, sliceSize) {
		const url = `https://api.poloniex.com/markets/${symbol}/orderBook?limit=150`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.asks && data.bids) {
				const asks = [];
				const bids = [];
				for (let i = 0; i < data.asks.length; i += 2) {
					asks.push([parseFloat(data.asks[i]), parseFloat(data.asks[i + 1])]);
				}
				for (let i = 0; i < data.bids.length; i += 2) {
					bids.push([parseFloat(data.bids[i]), parseFloat(data.bids[i + 1])]);
				}
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Poloniex', symbol, asks: asks.slice(0, sliceSize), bids: bids.slice(0, sliceSize) };
			} else {
				console.error('Error fetching data from Poloniex:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Poloniex:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchProbit(symbol, sliceSize) {
		const url = `https://api.probit.com/api/exchange/v1/order_book?market_id=${symbol}`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.data) {
				const asks = [];
				const bids = [];
				for (const order of data.data) {
					if (order.side === 'sell') {
						asks.push([parseFloat(order.price), parseFloat(order.quantity)]);
					} else if (order.side === 'buy') {
						bids.push([parseFloat(order.price), parseFloat(order.quantity)]);
					}
				}
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Probit', symbol, asks: asks.slice(0, sliceSize), bids: bids.slice(0, sliceSize) };
			} else {
				console.error('Error fetching data from Probit:', data);
				return null; // Return null to indicate data retrieval failure
			}
		} catch (error) {
			console.error('Error fetching data from Probit:', error);
			return null; // Return null to indicate data retrieval failure
		}
	}

	async function fetchWazirx(symbol, sliceSize) {
		const url = `https://api.wazirx.com/sapi/v1/depth?symbol=${symbol}&limit=1000`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.asks && data.bids) {
				const asks = data.asks.slice(0, sliceSize).map(order => [parseFloat(order[0]), parseFloat(order[1])]);
				const bids = data.bids.slice(0, sliceSize).map(order => [parseFloat(order[0]), parseFloat(order[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Wazirx', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Wazirx:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Wazirx:', error);
			return null;
		}
	}

	async function fetchWhitebit(symbol, sliceSize) {
		const url = `https://whitebit.com/api/v4/public/orderbook/${symbol}?limit=100&level=2`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.asks && data.bids) {
				const asks = data.asks.slice(0, sliceSize).map(order => [parseFloat(order[0]), parseFloat(order[1])]);
				const bids = data.bids.slice(0, sliceSize).map(order => [parseFloat(order[0]), parseFloat(order[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);				
				return { exchange: 'Whitebit', symbol, asks, bids };
			} else {
				console.error('Error fetching data from Whitebit:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Whitebit:', error);
			return null;
		}
	}

	async function fetchWebsea(symbol, sliceSize) {
		const url = `https://oapi.websea.com/openApi/market/depth?&symbol=${symbol}&size=1000`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			if (data && data.result && data.result.asks) {
				const asks = data.result.asks.map(ask => [parseFloat(ask[0]), parseFloat(ask[1])]);
				const bids = data.result.bids.map(bid => [parseFloat(bid[0]), parseFloat(bid[1])]);
				asks.sort((a, b) => a[0] - b[0]);
				bids.sort((a, b) => b[0] - a[0]);
				return { exchange: 'Websea', symbol, asks: asks.slice(0, sliceSize), bids: bids.slice(0, sliceSize) };
			} else {
				console.error('Error fetching data from Websea:', data);
				return null;
			}
		} catch (error) {
			console.error('Error fetching data from Websea:', error);
			return null;
		}
	}