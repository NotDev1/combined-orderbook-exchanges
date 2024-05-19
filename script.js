function selectAllExchanges() {
	var checkboxes = document.querySelectorAll('.exchange');
	checkboxes.forEach(function(checkbox) {
		checkbox.checked = true;
	});
}

function unselectAllExchanges() {
	var checkboxes = document.querySelectorAll('.exchange');
	checkboxes.forEach(function(checkbox) {
		checkbox.checked = false;
	});
}

function setChartHeight() {
	var windowHeight = window.innerHeight;
	var chartContainer = document.getElementById('orderbookchart');
	var chartHeight = windowHeight - chartContainer.offsetTop - 10; 
	chartContainer.style.height = chartHeight + 'px';
}

window.addEventListener('resize', setChartHeight);

setChartHeight();

document.addEventListener('DOMContentLoaded', function () {
    const exchanges = ['Binance', 'Bequant', 'Bitmart', 'MEXC', 'Bybit', 'Ascendex', 'Azbit', 'BigOne', 'BinanceUS', 'Bitbns', 'Bitdelta', 'Bitfinex', 
	'Bitget', 'Bitso', 'Bitstamp', 'Bitvavo', 'Coinbase', 'Coinex', 'Digifinex', 'Exmo', 'Fmfw', 'Gateio', 'Hitbtc', 'Huobi', 'Kraken', 'Kucoin', 'Phemex', 'Poloniex', 'Probit', 'Wazirx', 'Whitebit', 'Websea'];
    const symbols = ['1INCHUSDT', 'AAVEUSDT', 'ACHUSDT', 'ADAUSDT', 'AEVOUSDT', 'AGIXUSDT', 'AIUSDT', 'AIDOGEUSDT', 'AITECHUSDT', 'AKROUSDT', 'AKTUSDT', 'ALGOUSDT', 'ALICEUSDT', 'ANALOSUSDT', 'ANKRUSDT', 'ANMLUSDT', 'APEUSDT', 'APTUSDT', 'ARBUSDT', 'ARKMUSDT', 'ARVUSDT', 'ATLASUSDT', 'ATOMUSDT', 'AVAXUSDT', 'AXSUSDT', 'BANDUSDT', 'BATUSDT', 'BCHUSDT', 'BIGTIMEUSDT', 'BLURUSDT', 'BNBUSDT', 'BOBUSDT', 'BOMEUSDT', 'BRETTUSDT', 'BRISEUSDT', 'BSVUSDT', 'BTCUSDT', 'BTTUSDT', 'C98USDT', 'CAKEUSDT', 'CAPOUSDT', 'CAPSUSDT', 'CCDUSDT', 'CELRUSDT', 'CGPTUSDT', 'CHRUSDT', 'CHZUSDT', 'CKBUSDT', 'COMPUSDT', 'COTIUSDT', 'CPOOLUSDT', 'CQTUSDT', 'CROUSDT', 'CRVUSDT', 'CSPRUSDT', 'CUDOSUSDT', 'CULTUSDT', 'CVXUSDT', 'CWSUSDT', 'DAOUSDT', 'DASHUSDT', 'DCUSDT', 'DEGENUSDT', 'DEGOUSDT', 'DESOUSDT', 'DIAUSDT', 'DOGEUSDT', 'DOSEUSDT', 'DOTUSDT', 'DUELUSDT', 'DUSKUSDT', 'DYDXUSDT', 'EDUUSDT', 'EGLDUSDT', 'ELFUSDT', 'ENAUSDT', 'ENJUSDT', 'EOSUSDT', 'ETCUSDT', 'ETHUSDT', 'ETHFIUSDT', 'ETHWUSDT', 'FETUSDT', 'FIDAUSDT', 'FILUSDT', 'FIOUSDT', 'FISUSDT', 'FLOKIUSDT', 'FREEUSDT', 'FRONTUSDT', 'FTMUSDT', 'FTTUSDT', 'FUSEUSDT', 'FXSUSDT', 'GALUSDT', 'GALAUSDT', 'GMXUSDT', 'GNOUSDT', 'GNSUSDT', 'GRAPEUSDT', 'GRTUSDT', 'GTAIUSDT', 'HAPIUSDT', 'HARDUSDT', 'HFTUSDT', 'HIGHUSDT', 'HOOKUSDT', 'HOPRUSDT', 'HOTUSDT', 'HTRUSDT', 'HTXUSDT', 'IDUSDT', 'IMXUSDT', 'INJUSDT', 'IOSTUSDT', 'JSTUSDT', 'JULDUSDT', 'JUPUSDT', 'KAVAUSDT', 'KCSUSDT', 'KINUSDT', 'LADYSUSDT', 'LDOUSDT', 'LEOUSDT', 'LIKEUSDT', 'LIMEUSDT', 'LINAUSDT', 'LINKUSDT', 'LOKAUSDT', 'LOOKSUSDT', 'LOOMUSDT', 'LOVELYUSDT', 'LRCUSDT', 'LTCUSDT', 'LTOUSDT', 'MANAUSDT', 'MANTAUSDT', 'MASKUSDT', 'MATICUSDT', 'MEMEUSDT', 'MEWUSDT', 'MICEUSDT', 'MMSSUSDT', 'MPLUSDT', 'MPLXUSDT', 'MUBIUSDT', 'MYROUSDT', 'NEARUSDT', 'NEOUSDT', 'NFTUSDT', 'OGUSDT', 'OMUSDT', 'OMGUSDT', 'OMIUSDT', 'ONDOUSDT', 'ONEUSDT', 'ONGUSDT', 'ONTUSDT', 'OPUSDT', 'OPULUSDT', 'ORDIUSDT', 'ORNUSDT', 'PANDORAUSDT', 'PEPEUSDT', 'POLCUSDT', 'POLISUSDT', 'PONKEUSDT', 'PORKUSDT', 'QNTUSDT', 'QRDOUSDT', 'QTUMUSDT', 'QUICKUSDT', 'RAINUSDT', 'RATSUSDT', 'RDNTUSDT', 'REVVUSDT', 'RFDUSDT', 'RNDRUSDT', 'ROOSTUSDT', 'ROUTEUSDT', 'RPLUSDT', 'RUNEUSDT', 'RVNUSDT', 'SANDUSDT', 'SATSUSDT', 'SFPUSDT', 'SHIBUSDT', 'SIDUSUSDT', 'SLERFUSDT', 'SLIMUSDT', 'SLNUSDT', 'SNXUSDT', 'SOLUSDT', 'SOLSUSDT', 'SORAUSDT', 'SSVUSDT', 'STRKUSDT', 'SUIUSDT', 'SUNUSDT', 'SUSHIUSDT', 'SWAPUSDT', 'SWEATUSDT', 'SYNCUSDT', 'TARAUSDT', 'TIAUSDT', 'TIPUSDT', 'TOSHIUSDT', 'TRACUSDT', 'TRXUSDT', 'TURBOUSDT', 'TURTUSDT', 'UFTUSDT', 'UNIUSDT', 'UOSUSDT', 'USDDUSDT', 'VANRYUSDT', 'VETUSDT', 'VMPXUSDT', 'VOLTUSDT', 'VOXELUSDT', 'VOYAUSDT', 'VRAUSDT', 'WUSDT', 'WAVESUSDT', 'WENUSDT', 'WINUSDT', 'WLDUSDT', 'WLKNUSDT', 'WOJAKUSDT', 'WOOUSDT', 'WSBUSDT', 'XAIUSDT', 'XCADUSDT', 'XECUSDT', 'XEMUSDT', 'XENUSDT', 'XLMUSDT', 'XPRTUSDT', 'XRDUSDT', 'XRPUSDT', 'XTZUSDT', 'ZBCUSDT', 'ZECUSDT', 'ZEEUSDT', 'ZETAUSDT', 'ZEUSUSDT', 'ZIGUSDT', 'ZILUSDT', 'ZKUSDT', 'ZKFUSDT', 'ZRXUSDT', 'ZYNUSDT', 'ZZZUSDT', 'ACEUSDT', 'ALPHAUSDT', 'ALTUSDT', 'APXUSDT', 'ASRUSDT', 'ATAUSDT', 'BEAMXUSDT', 'BELUSDT', 'BNTUSDT', 'BONKUSDT', 'CTKUSDT', 'FDUSDUSDT', 'FLOWUSDT', 'GMTUSDT', 'GRVUSDT', 'HBARUSDT', 'ISPUSDT', 'IVPAYUSDT', 'JTOUSDT', 'KNCUSDT', 'LITUSDT', 'MDXUSDT', 'MIRUSDT', 'MKRUSDT', 'NLCUSDT', 'OKBUSDT', 'ORTUSDT', 'PAXGUSDT', 'PENDLEUSDT', 'PERPUSDT', 'PITUSDT', 'PIXELUSDT', 'PORTALUSDT', 'QIUSDT', 'STRMUSDT', 'TONUSDT', 'TUSDUSDT', 'TWTUSDT', 'USDCUSDT', 'USDPUSDT', 'WBTCUSDT', 'XAUTUSDT', 'XMRUSDT', 'YFIUSDT', 'ALPACAUSDT', 'BTGUSDT', 'HIFIUSDT', 'ICPUSDT', 'JAMUSDT', 'LUNAUSDT', 'LUNCUSDT', 'NEXOUSDT', 'STXUSDT', 'XDCUSDT', 'XYMUSDT', '1CATUSDT', 'ACAUSDT', 'ADA3LUSDT', 'ADA3SUSDT', 'ANTUSDT', 'ARUSDT', 'ASTRUSDT', 'AVAX3LUSDT', 'AVAX3SUSDT', 'AXS3LUSDT', 'AXS3SUSDT', 'BABYDOGEUSDT', 'BCH3LUSDT', 'BCH3SUSDT', 'BITCIUSDT', 'BNB3LUSDT', 'BNB3SUSDT', 'BTC3LUSDT', 'BTC3SUSDT', 'CELOUSDT', 'DODOUSDT', 'DOGE3LUSDT', 'DOGE3SUSDT', 'DOT3LUSDT', 'DOT3SUSDT', 'ENSUSDT', 'EOS3LUSDT', 'EOS3SUSDT', 'ETH3LUSDT', 'ETH3SUSDT', 'EURTUSDT', 'FTM3LUSDT', 'FTM3SUSDT', 'GASUSDT', 'GLMRUSDT', 'KISHUUSDT', 'KSMUSDT', 'LINK3LUSDT', 'LINK3SUSDT', 'LTC3LUSDT', 'LTC3SUSDT', 'LUFFYUSDT', 'MOBUSDT', 'NEAR3LUSDT', 'NEAR3SUSDT', 'PEOPLEUSDT', 'REIUSDT', 'ROSEUSDT', 'SAND3LUSDT', 'SAND3SUSDT', 'SCUSDT', 'SOL3LUSDT', 'SOL3SUSDT', 'SUSHI3LUSDT', 'SUSHI3SUSDT', 'TRX3LUSDT', 'TRX3SUSDT', 'UNI3LUSDT', 'UNI3SUSDT', 'USTCUSDT', 'X2Y2USDT', 'XRP3LUSDT', 'XRP3SUSDT', 'ZENUSDT', 'ACMUSDT', 'ADXUSDT', 'AERGOUSDT', 'AGLDUSDT', 'ALCXUSDT', 'ALPINEUSDT', 'AMBUSDT', 'AMPUSDT', 'API3USDT', 'ARDRUSDT', 'ARKUSDT', 'ARPAUSDT', 'ASTUSDT', 'ATMUSDT', 'AUCTIONUSDT', 'AUDIOUSDT', 'AUTOUSDT', 'AVAUSDT', 'AXLUSDT', 'BADGERUSDT', 'BAKEUSDT', 'BALUSDT', 'BARUSDT', 'BEAMUSDT', 'BETAUSDT', 'BETHUSDT', 'BICOUSDT', 'BIFIUSDT', 'BLZUSDT', 'BNXUSDT', 'BONDUSDT', 'BSWUSDT', 'BTSUSDT', 'BURGERUSDT', 'CFXUSDT', 'CHESSUSDT', 'CITYUSDT', 'CLVUSDT', 'COMBOUSDT', 'COSUSDT', 'CREAMUSDT', 'CTSIUSDT', 'CTXCUSDT', 'CVCUSDT', 'CVPUSDT', 'CYBERUSDT', 'DAIUSDT', 'DARUSDT', 'DATAUSDT', 'DCRUSDT', 'DENTUSDT', 'DEXEUSDT', 'DFUSDT', 'DGBUSDT', 'DOCKUSDT', 'DREPUSDT', 'DYMUSDT', 'EPXUSDT', 'ERNUSDT', 'FARMUSDT', 'FIROUSDT', 'FLMUSDT', 'FLUXUSDT', 'FORTHUSDT', 'FORUSDT', 'FUNUSDT', 'GFTUSDT', 'GHSTUSDT', 'GLMUSDT', 'GTCUSDT', 'HIVEUSDT', 'HNTUSDT', 'ICXUSDT', 'IDEXUSDT', 'ILVUSDT', 'IOTAUSDT', 'IOTXUSDT', 'IQUSDT', 'JASMYUSDT', 'JOEUSDT', 'JUVUSDT', 'KDAUSDT', 'KEYUSDT', 'KLAYUSDT', 'KMDUSDT', 'KP3RUSDT', 'LAZIOUSDT', 'LEVERUSDT', 'LPTUSDT', 'LQTYUSDT', 'LSKUSDT', 'MAGICUSDT', 'MAVUSDT', 'MBLUSDT', 'MBOXUSDT', 'MDTUSDT', 'METISUSDT', 'MINAUSDT', 'MITHUSDT', 'MLNUSDT', 'MOVRUSDT', 'MTLUSDT', 'MULTIUSDT', 'NFPUSDT', 'NKNUSDT', 'NMRUSDT', 'NTRNUSDT', 'NULSUSDT', 'OAXUSDT', 'OCEANUSDT', 'OGNUSDT', 'OOKIUSDT', 'OSMOUSDT', 'OXTUSDT', 'PDAUSDT', 'PERLUSDT', 'PHAUSDT', 'PHBUSDT', 'PLAUSDT', 'POLSUSDT', 'POLYXUSDT', 'PONDUSDT', 'PORTOUSDT', 'POWRUSDT', 'PROMUSDT', 'PROSUSDT', 'PSGUSDT', 'PUNDIXUSDT', 'PYRUSDT', 'PYTHUSDT', 'QKCUSDT', 'RADUSDT', 'RAREUSDT', 'RAYUSDT', 'REEFUSDT', 'RENUSDT', 'REPUSDT', 'REQUSDT', 'RIFUSDT', 'RLCUSDT', 'RSRUSDT', 'SANTOSUSDT', 'SCRTUSDT', 'SEIUSDT', 'SKLUSDT', 'SLPUSDT', 'SNTUSDT', 'SPELLUSDT', 'SRMUSDT', 'STEEMUSDT', 'STGUSDT', 'STMXUSDT', 'STORJUSDT', 'STPTUSDT', 'SUPERUSDT', 'SXPUSDT', 'SYNUSDT', 'SYSUSDT', 'TFUELUSDT', 'THETAUSDT', 'TKOUSDT', 'TLMUSDT', 'TORNUSDT', 'TRBUSDT', 'TRIBEUSDT', 'TRUUSDT', 'TUSDT', 'UMAUSDT', 'UNFIUSDT', 'UTKUSDT', 'VGXUSDT', 'VIBUSDT', 'VICUSDT', 'VITEUSDT', 'VTHOUSDT', 'WAXPUSDT', 'WIFUSDT', 'WINGUSDT', 'WNXMUSDT', 'WRXUSDT', 'XNOUSDT', 'XVGUSDT', 'XVSUSDT', 'YFIIUSDT', 'YGGUSDT', 'BOSONUSDT', 'BTRSTUSDT', 'FORTUSDT', 'MXCUSDT', 'ORBSUSDT', 'ACSUSDT', 'AEROUSDT', 'AGIUSDT', 'AIOZUSDT', 'AKITAUSDT', 'ALIUSDT', 'ALUUSDT', 'APPUSDT', 'ARGUSDT', 'ASTOUSDT', 'AURORAUSDT', 'AZEROUSDT', 'BANANAUSDT', 'BLOKUSDT', 'BOBAUSDT', 'BONEUSDT', 'BORAUSDT', 'BOZOUSDT', 'BRWLUSDT', 'BZZUSDT', 'CANDYUSDT', 'CANTOUSDT', 'CAWUSDT', 'CEEKUSDT', 'CELUSDT', 'CETUSUSDT', 'CFGUSDT', 'CHATUSDT', 'CLIPSUSDT', 'COQUSDT', 'COREUSDT', 'CRUUSDT', 'CSIXUSDT', 'CTCUSDT', 'CVTXUSDT', 'DCKUSDT', 'DEFIUSDT', 'DEPUSDT', 'DMAILUSDT', 'DOMEUSDT', 'DORAUSDT', 'DOVIUSDT', 'DPXUSDT', 'DZOOUSDT', 'EGOUSDT', 'ELAUSDT', 'ELONUSDT', 'EULUSDT', 'EVMOSUSDT', 'F3USDT', 'FARUSDT', 'FIREUSDT', 'FITFIUSDT', 'FLIPUSDT', 'FLRUSDT', 'FTNUSDT', 'GARIUSDT', 'GEARUSDT', 'GFUSDT', 'GFIUSDT', 'GMUSDT', 'GODSUSDT', 'GPTUSDT', 'GRAILUSDT', 'GROKUSDT', 'HEGICUSDT', 'HEROUSDT', 'HMTUSDT', 'ICEUSDT', 'INSPUSDT', 'INSURUSDT', 'IQ50USDT', 'IRONUSDT', 'IZIUSDT', 'JGNUSDT', 'KARUSDT', 'KASUSDT', 'KUNCIUSDT', 'LUSDT', 'LAIUSDT', 'LAMBUSDT', 'LATUSDT', 'LBRUSDT', 'LEASHUSDT', 'LITHUSDT', 'LONUSDT', 'LOOTUSDT', 'MAVIAUSDT', 'MFERUSDT', 'MILOUSDT', 'MLUSDT', 'MNDEUSDT', 'MNTUSDT', 'MOBILEUSDT', 'MOCKJUPUSDT', 'MONGUSDT', 'MYRIAUSDT', 'NAKAUSDT', 'NAPUSDT', 'NEONUSDT', 'NGLUSDT', 'NOMUSDT', 'NUMUSDT', 'NYMUSDT', 'O3USDT', 'OASUSDT', 'OCTUSDT', 'OGVUSDT', 'OLEUSDT', 'ORBUSDT', 'ORCAUSDT', 'ORDSUSDT', 'ORNJUSDT', 'OVRUSDT', 'OXUSDT', 'PAALUSDT', 'PENGUSDT', 'PLAYUSDT', 'POKTUSDT', 'POOLXUSDT', 'PPTUSDT', 'PRIMALUSDT', 'PRIMEUSDT', 'PRISMAUSDT', 'PSTAKEUSDT', 'PUMPUSDT', 'PUNDUUSDT', 'PUSHUSDT', 'PYUSDUSDT', 'RACAUSDT', 'RADARUSDT', 'RBNUSDT', 'RIOUSDT', 'RJVUSDT', 'RLYUSDT', 'RONUSDT', 'ROOTUSDT', 'RPKUSDT', 'RSS3USDT', 'SAMOUSDT', 'SAROSUSDT', 'SAVMUSDT', 'SCAUSDT', 'SDUSDT', 'SDAOUSDT', 'SEAMUSDT', 'SFUNDUSDT', 'SHRAPUSDT', 'SILLYUSDT', 'SINUSDT', 'SISUSDT', 'SMOLEUSDT', 'SNEKUSDT', 'SOLOUSDT', 'SOSUSDT', 'SPAUSDT', 'SPURSUSDT', 'STARLUSDT', 'STETHUSDT', 'SUDOUSDT', 'SUIPUSDT', 'SUKUUSDT', 'SWFTCUSDT', 'TAOUSDT', 'TENETUSDT', 'TETUSDT', 'THGUSDT', 'TOKENUSDT', 'TROLLUSDT', 'UMEEUSDT', 'UNIBOTUSDT', 'VAIUSDT', 'VEGAUSDT', 'VELAUSDT', 'VEMPUSDT', 'VLXUSDT', 'VRTXUSDT', 'WAGMIGAMESUSDT', 'WAXLUSDT', 'WEMIXUSDT', 'WIFIUSDT', 'WILDUSDT', 'WMTUSDT', 'WNCGUSDT', 'WSMUSDT', 'XCHUSDT', 'XCNUSDT', 'XETAUSDT', 'XPETUSDT', 'XPRUSDT', 'XYOUSDT', 'ZEROUSDT', 'ZKBUSDT', 'ZTXUSDT', 'ZUZALUUSDT', 'CRPTUSDT', 'ABBCUSDT', 'AFCUSDT', 'ALEXUSDT', 'AMPLUSDT', 'ARTYUSDT', 'BBLUSDT', 'BEFIUSDT', 'CBKUSDT', 'CMPUSDT', 'COMUSDT', 'COREUMUSDT', 'CREUSDT', 'CSASUSDT', 'DERCUSDT', 'DFIUSDT', 'DMTRUSDT', 'GECUSDT', 'GLQUSDT', 'GMEEUSDT', 'GMMTUSDT', 'GMRXUSDT', 'GSTUSDT', 'HAMUSDT', 'HELLOUSDT', 'IGUUSDT', 'KLVUSDT', 'LMWRUSDT', 'LYXUSDT', 'MBXUSDT', 'MCRTUSDT', 'MOGUSDT', 'MOVEZUSDT', 'MVLUSDT', 'MVUSDT', 'MXUSDT', 'NAVXUSDT', 'NPTUSDT', 'ORAIUSDT', 'PAWUSDT', 'PEPE2USDT', 'PIPUSDT', 'PLANETUSDT', 'PMGUSDT', 'POLUSDT', 'SCLPUSDT', 'SHILLUSDT', 'SYLOUSDT', 'TAMAUSDT', 'TIMEUSDT', 'TLOSUSDT', 'TOMIUSDT', 'TRIASUSDT', 'TSUKAUSDT', 'UFOUSDT', 'VELOUSDT', 'VEXTUSDT', 'VINUUSDT', 'VRUSDT', 'WOMUSDT', 'XPLAUSDT', 'BFCUSDT', 'BOOUSDT', 'CWARUSDT', 'DAGUSDT', 'DFYNUSDT', 'DYPUSDT', 'EPIKUSDT', 'ERGUSDT', 'EVERUSDT', 'EWTUSDT', 'FXUSDT', 'KAIUSDT', 'LVNUSDT', 'MATHUSDT', 'NEXTUSDT', 'NOIAUSDT', 'POPCATUSDT', 'PORT3USDT', 'PROUSDT', 'PRQUSDT', 'PSPUSDT', 'RARIUSDT', 'REALUSDT', 'SDNUSDT', 'SGBUSDT', 'SMILEYUSDT', 'STCUSDT', 'VOWUSDT', 'XCURUSDT', 'YOOSHIUSDT', 'BCUTUSDT', 'DECHATUSDT', 'KUBUSDT', 'LENDSUSDT', 'NIBIUSDT', 'OMNUSDT', 'VENOMUSDT', 'XAVAUSDT', 'ALEPHUSDT', 'CEREUSDT', 'EQXUSDT', 'ETNUSDT', 'FSNUSDT', 'GOALUSDT', 'LUNRUSDT', 'MUSICUSDT', 'NCTUSDT', 'OOEUSDT', 'PBRUSDT', 'RINGUSDT', 'SSWPUSDT', 'TOKEUSDT', 'TRADEUSDT', 'TTUSDT', 'VSYSUSDT', 'WHALEUSDT', 'PSLUSDT', 'SENSOUSDT', 'ZCXUSDT', 'NWCUSDT', 'OKTUSDT', 'WBTUSDT', 'ZELIXUSDT', 'USDJUSDT'];

    document.getElementById('add-symbol-button').addEventListener('click', function () {
        const symbolInput = document.getElementById('add-symbol-input').value.trim().toUpperCase();
        if (symbolInput && !symbols.includes(symbolInput)) {
            symbols.push(symbolInput);
            updateSymbolDropdown();
        } else {
            alert('Symbol already exists or input is empty.');
        }
    });

    function updateSymbolDropdown() {
        const symbolDropdownContent = document.querySelector('.symbol-dropdown-content');
        symbolDropdownContent.innerHTML = ''; 
        symbols.forEach(symbol => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="symbol" class="symbol" value="${symbol}"> ${symbol}`;
            symbolDropdownContent.appendChild(label);
        });
    }

	const symbolMappings = {
		'Ascendex': (symbol) => symbol.replace('USDT', '/USDT'),
		'Azbit': (symbol) => symbol.replace('USDT', '_USDT'),
		'BigOne': (symbol) => symbol.replace('USDT', '-USDT'),
		'Bequant': (symbol) => symbol,
		'Binance': (symbol) => symbol,
		'BinanceUS': (symbol) => symbol,
		'Bitbns': (symbol) => symbol,
		'Bitdelta': (symbol) => symbol,
		'Bitfinex': (symbol) => symbol.replace(/^t+/, 't').replace('USDT', 'USD'),
		'Bitget': (symbol) => symbol,
		'Bitmart': (symbol) => symbol.replace('USDT', '_USDT'),
		'Bitso': (symbol) => symbol.toLowerCase().replace('usdt', '_usdt'),
		'Bitstamp': (symbol) => symbol.toLowerCase(),
		'Bitvavo': (symbol) => symbol.replace('USDT', '-USDT'),
		'Bybit': (symbol) => symbol,
		'Coinbase': (symbol) => symbol.replace('USDT', '-USDT'),
		'Coinex': (symbol) => symbol,
		'Delta': (symbol) => symbol,
		'Digifinex': (symbol) => symbol.replace('USDT', '_USDT'),
		'Exmo': (symbol) => symbol.replace('USDT', '_USDT'),
		'Fmfw': (symbol) => symbol,
		'Gateio': (symbol) => symbol.replace('USDT', '_USDT'),
		'Hitbtc': (symbol) => symbol,
		'Huobi': (symbol) => symbol.toLowerCase(),
		'Kraken': (symbol) => symbol,
		'Kucoin': (symbol) => symbol.replace('USDT', '-USDT'),
		'MEXC': (symbol) => symbol,
		'Phemex': (symbol) => symbol.replace('USDT', 'USD'),	
		'Poloniex': (symbol) => symbol.replace('USDT', '_USDT'),
		'Probit': (symbol) => symbol.replace('USDT', '-USDT'),
		'Wazirx': (symbol) => symbol.toLowerCase(),
		'Whitebit': (symbol) => symbol.replace('USDT', '_USDT'),
		'Websea': (symbol) => symbol.replace('USDT', '-USDT'),
	};

    const symbolDropdownContent = document.querySelector('.symbol-dropdown-content');
    symbols.forEach(symbol => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="symbol" class="symbol" value="${symbol}"> ${symbol}`;
        symbolDropdownContent.appendChild(label);
    });

    let autoRefreshInterval;
    let chart;

    document.getElementById('fetch-data').addEventListener('click', fetchData);
    document.getElementById('auto-refresh').addEventListener('change', function () {
        if (this.checked) {
            autoRefreshInterval = setInterval(fetchData, 10000);
        } else {
            clearInterval(autoRefreshInterval);
        }
    });

    document.getElementById('destroyChartButton').addEventListener('click', function () {
        if (chart) {
            chart.destroy();
            chart = null;
        }
    });

	document.getElementById('slice-size').addEventListener('change', function () {
		if (chart) {
			chart.destroy();
			chart = null;
		}
	});

    const symbolRadios = document.querySelectorAll('.symbol');
    symbolRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (chart) {
                chart.destroy();
                chart = null;
            }
        });
    });

    let previousDataHash = '';

    async function fetchData() {
        const selectedExchanges = Array.from(document.querySelectorAll('.exchange:checked')).map(input => input.value);
        const selectedSymbol = document.querySelector('.symbol:checked')?.value;
        const selectedSliceSize = parseInt(document.getElementById('slice-size').value);

        if (selectedExchanges.length === 0 || !selectedSymbol) {
            alert('Please select at least one exchange and one symbol.');
            return;
        }

        const data = [];
        let totalAsks = 0;
        let totalBids = 0;

        for (const exchange of selectedExchanges) {
            let exchangeData = await fetchExchangeData(exchange, selectedSymbol, selectedSliceSize);
            if (exchangeData) {
                data.push(exchangeData);
                totalAsks += exchangeData.asks.reduce((sum, ask) => sum + ask[1], 0);
                totalBids += exchangeData.bids.reduce((sum, bid) => sum + bid[1], 0);
            }
        }

        const totalVolume = totalAsks + totalBids;
        const asksPercentage = (totalAsks / totalVolume) * 100;
        const bidsPercentage = (totalBids / totalVolume) * 100;

        document.getElementById('total-info').innerHTML = `Asks: ${asksPercentage.toFixed(2)}% Bids: ${bidsPercentage.toFixed(2)}%`;

        const dataHash = JSON.stringify(data);
        if (dataHash !== previousDataHash) {
            updateChart(data);
            previousDataHash = dataHash;
        }
    }

    async function fetchExchangeData(exchange, symbol, sliceSize) {
        const formattedSymbol = symbolMappings[exchange](symbol);
        switch (exchange) {
            case 'Binance':
                return fetchBinance(formattedSymbol, sliceSize);
            case 'Bequant':
                return fetchBequant(formattedSymbol, sliceSize);
            case 'Bitmart':
                return fetchBitmart(formattedSymbol, sliceSize);
            case 'MEXC':
                return fetchMEXC(formattedSymbol, sliceSize);
            case 'Bybit':
                return fetchBybit(formattedSymbol, sliceSize);
            case 'Ascendex':
                return fetchAscendex(formattedSymbol, sliceSize);
            case 'Azbit':
                return fetchAzbit(formattedSymbol, sliceSize);
			case 'BigOne':
				return fetchBigOne(formattedSymbol, sliceSize);
			case 'BinanceUS':
				return fetchBinanceUS(formattedSymbol, sliceSize);
			case 'Bitbns':
				return fetchBitbns(formattedSymbol, sliceSize);
			case 'Bitdelta':
				return fetchBitdelta(formattedSymbol, sliceSize);
			case 'Bitfinex':
				return fetchBitfinex(formattedSymbol, sliceSize);
			case 'Bitget':
				return fetchBitget(formattedSymbol, sliceSize);	
			case 'Bitso':
				return fetchBitso(formattedSymbol, sliceSize);
			case 'Bitstamp':
				return fetchBitstamp(formattedSymbol, sliceSize);
			case 'Bitvavo':
				return fetchBitvavo(formattedSymbol, sliceSize);
			case 'Coinbase':
				return fetchCoinbase(formattedSymbol, sliceSize);
			case 'Coinex':
				return fetchCoinex(formattedSymbol, sliceSize);
			case 'Delta':
				return fetchDelta(formattedSymbol, sliceSize);
			case 'Digifinex':
				return fetchDigifinex(formattedSymbol, sliceSize);
			case 'Exmo':
				return fetchExmo(formattedSymbol, sliceSize);	
			case 'Fmfw':
				return fetchFmfw(formattedSymbol, sliceSize);
			case 'Gateio':
				return fetchGateio(formattedSymbol, sliceSize);
			case 'Hitbtc':
				return fetchHitbtc(formattedSymbol, sliceSize);
			case 'Huobi':
				return fetchHuobi(formattedSymbol, sliceSize);
			case 'Kraken':
				return fetchKraken(formattedSymbol, sliceSize);
			case 'Kucoin':
				return fetchKucoin(formattedSymbol, sliceSize);
			case 'Phemex':
				return fetchPhemex(formattedSymbol, sliceSize);
			case 'Poloniex':
				return fetchPoloniex(formattedSymbol, sliceSize);
			case 'Probit':
				return fetchProbit(formattedSymbol, sliceSize);
			case 'Wazirx':
				return fetchWazirx(formattedSymbol, sliceSize);
			case 'Whitebit':
				return fetchWhitebit(formattedSymbol, sliceSize);
			case 'Websea':
				return fetchWebsea(formattedSymbol, sliceSize);				
        }
    }

    function updateChart(data) {
        const combinedData = {};
		const exchangeColors = {
			'Ascendex': '#FFA500',       
			'Azbit': '#AA336A',          
			'Bequant': '#800080',        
			'BigOne': '#4B0082',         
			'Binance': '#FFFF00',        
			'BinanceUS': '#FFD700',      
			'Bitbns': '#DAA520',         
			'Bitdelta': '#FFA07A',       
			'Bitfinex': '#FF6347',       
			'Bitget': '#FF4500',         
			'Bitmart': '#008000',        
			'Bitso': '#00FF00',          
			'Bitstamp': '#7FFF00',       
			'Bybit': '#000000',          
			'Coinbase': '#000080',       
			'Coinex': '#00008B',         
			'Delta': '#0000FF',          
			'Digifinex': '#4169E1',      
			'Exmo': '#483D8B',           
			'Fmfw': '#800000',           
			'Gateio': '#20B2AA',         
			'Hitbtc': '#9932CC',         
			'Huobi': '#FF00FF',          
			'Kraken': '#00CED1',         
			'Kucoin': '#FF7F50',         
			'Phemex': '#4682B4',         
			'Poloniex': '#32CD32',       
			'Probit': '#556B2F',         
			'MEXC': '#800000',           
			'Wazirx': '#20B2AA',         
			'Whitebit': '#9932CC',       
			'Websea': '#FF00FF',         
		};

        data.forEach(({ exchange, symbol, asks, bids }) => {
            const key = `${symbol}`;
            if (!combinedData[key]) {
                combinedData[key] = { exchange, symbol, asks: [], bids: [] };
            }

            asks.forEach(([price, quantity]) => {
                combinedData[key].asks.push({
                    name: `${exchange} - (Asks)`,
                    y: quantity,
                    x: price,
                    color: exchangeColors[exchange],
                    InUSD: (price * quantity).toFixed(2)
                });
            });
            bids.forEach(([price, quantity]) => {
                combinedData[key].bids.push({
                    name: `${exchange} - (Bids)`,
                    y: quantity,
                    x: price,
                    color: exchangeColors[exchange],
                    InUSD: (price * quantity).toFixed(2)
                });
            });
        });

        const series = [];
        const legendEntries = {};

        Object.keys(combinedData).forEach(symbol => {
            combinedData[symbol].asks.forEach(item => {
                const exchangeName = item.name.split(' - ')[0];
                if (!legendEntries[exchangeName]) {
                    legendEntries[exchangeName] = {
                        id: exchangeName,
                        name: exchangeName,
                        data: [item],
                        type: 'bar',
                        stack: 'asks',
                        showInLegend: true,
                        color: exchangeColors[exchangeName]
                    };
                    series.push(legendEntries[exchangeName]);
                } else {
                    series.push({
                        linkedTo: exchangeName,
                        data: [item],
                        type: 'bar',
                        stack: 'asks',
                        showInLegend: false
                    });
                }
            });
            combinedData[symbol].bids.forEach(item => {
                const exchangeName = item.name.split(' - ')[0];
                series.push({
                    linkedTo: exchangeName,
                    data: [item],
                    type: 'bar',
                    stack: 'bids',
                    showInLegend: false,
                    color: exchangeColors[exchangeName]
                });
            });
        });

        if (!chart) {
            chart = Highcharts.chart('orderbookchart', {
                chart: {
					type: 'bar',
					panning: true, 
					panKey: 'shift' 
                },
                title: {
                    text: '',
                    style: {
                        fontSize: '11px' 
                    }
                },
                xAxis: {
                    type: 'treegrid', 
                    title: {
                        text: '',
                        style: {
                            fontSize: '11px' 
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '11px' 
                        }
                    },
                    reversed: false 
                },
                yAxis: {
                    visible: true,
					type: 'treegrid',
                    title: {
                        text: '',
                        style: {
                            fontSize: '11px' 
                        }
                    },
                    labels: {
                        style: {
                            fontSize: '11px' 
                        }
                    },
                    reversed: false,
                    stackLabels: {
                        enabled: false,
                        style: {
                            fontWeight: 'bold',
                            color: 'gray',
                            fontSize: '11px' 
                        }
                    }
                },
				tooltip: {
					headerFormat: '<b>Exchange: {point.key}</b><br>',
					pointFormatter: function () {
						return `Price: ${this.x}<br/>Quantity: ${this.y}<br/>$$$: ${this.InUSD}<br/>----------------------------<br/>Total Qty: ${this.stackTotal}<br/>Total $$$: ${(this.stackTotal * this.x).toFixed(2)}`;
					},
					style: {
						fontSize: '11px' 
					},
					shared: false, 
				},
                plotOptions: {
                    series: {
                        stacking: 'normal',
                        pointWidth: 6,
                        pointPadding: 0,
                        dataLabels: {
                            style: {
                                fontSize: '11px' 
                            }
                        }
                    }
                },
                legend: {
                    itemStyle: {
                        fontSize: '7px' 
                    }
                },
                credits: {
                    enabled: false 
                },
                exporting: {
                    enabled: true 
                },
                series: series
            });

            document.getElementById('zoom-in').addEventListener('click', function () {
                const extremes = chart.xAxis[0].getExtremes();
                const newMin = extremes.min + (extremes.max - extremes.min) * 0.2;
                const newMax = extremes.max - (extremes.max - extremes.min) * 0.2;
                chart.xAxis[0].setExtremes(newMin, newMax);
            });

            document.getElementById('zoom-out').addEventListener('click', function () {
                const extremes = chart.xAxis[0].getExtremes();
                const newMin = extremes.min - (extremes.max - extremes.min) * 0.2;
                const newMax = extremes.max + (extremes.max - extremes.min) * 0.2;
                chart.xAxis[0].setExtremes(newMin, newMax);
            });

        } else {

            for (let i = 0; i < series.length; i++) {
                if (chart.series[i]) {
                    chart.series[i].setData(series[i].data, false);
                } else {
                    chart.addSeries(series[i], false);
                }
            }
            chart.redraw();
        }
    }
});

function filterSymbols() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("symbol-search");
    filter = input.value.toUpperCase();
    div = document.querySelector(".symbol-dropdown-content");
    labels = div.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++) {
        txtValue = labels[i].textContent || labels[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            labels[i].style.display = "";
        } else {
            labels[i].style.display = "none";
        }
    }
}

function filterExchanges() {
    var input, filter, div, labels, i, txtValue;
    input = document.getElementById("exchange-search");
    filter = input.value.toUpperCase();
    div = document.querySelector(".dropdown-content");
    labels = div.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++) {
        txtValue = labels[i].textContent || labels[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            labels[i].style.display = "";
        } else {
            labels[i].style.display = "none";
        }
    }
}