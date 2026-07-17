const generateProducts = () => {
  const categories = [
    {
      name: "Phones",
      items: [
        { name: "iPhone 15 Pro Max", price: 1199.99, oldPrice: 1399.99, badge: "New", image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80", colors: ["#1c1917", "#e7e5e4", "#7c3aed"] },
        { name: "Samsung Galaxy S24 Ultra", price: 1099.99, oldPrice: 1299.99, badge: "Hot", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80", colors: ["#1e3a5f", "#1c1917", "#d4af37"] },
        { name: "Google Pixel 8 Pro", price: 899.99, oldPrice: 999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "OnePlus 12", price: 799.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80", colors: ["#1c1917", "#16a34a"] },
        { name: "iPhone 14", price: 799.99, oldPrice: 999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&q=80", colors: ["#fce7f3", "#e7e5e4", "#1c1917"] },
        { name: "Samsung Galaxy A54", price: 449.99, oldPrice: 549.99, badge: "Sale", image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?w=400&q=80", colors: ["#7c3aed", "#e7e5e4"] },
        { name: "Xiaomi 14 Pro", price: 699.99, oldPrice: 849.99, badge: "Hot", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Sony Xperia 1 V", price: 1299.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80", colors: ["#1c1917", "#7f1d1d"] },
        { name: "Motorola Edge 40 Pro", price: 599.99, oldPrice: 699.99, badge: "Sale", image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&q=80", colors: ["#1c1917", "#1e3a5f"] },
        { name: "Nokia G60", price: 299.99, oldPrice: 399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
      ]
    },
    {
      name: "Laptops",
      items: [
        { name: "MacBook Pro 16 M3", price: 2499.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Dell XPS 15 OLED", price: 1899.99, oldPrice: 2199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80", colors: ["#1c1917"] },
        { name: "MacBook Air M2", price: 1099.99, oldPrice: 1299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1611186871525-c29f5e5da8c0?w=400&q=80", colors: ["#e7e5e4", "#d4af37", "#1c1917"] },
        { name: "Lenovo ThinkPad X1", price: 1699.99, oldPrice: 1999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80", colors: ["#1c1917"] },
        { name: "HP Spectre x360", price: 1499.99, oldPrice: 1799.99, badge: "Hot", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Asus ROG Zephyrus", price: 1999.99, oldPrice: 2299.99, badge: "Hot", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80", colors: ["#1c1917", "#ef4444"] },
        { name: "Microsoft Surface Pro 9", price: 1299.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Acer Swift 5", price: 899.99, oldPrice: 1099.99, badge: "Sale", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Samsung Galaxy Book3", price: 1199.99, oldPrice: 1399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Razer Blade 15", price: 2299.99, oldPrice: 2599.99, badge: "Hot", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&q=80", colors: ["#1c1917"] },
      ]
    },
    {
      name: "Tablets",
      items: [
        { name: "iPad Pro 12.9", price: 1099.99, oldPrice: 1199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Samsung Galaxy Tab S9", price: 799.99, oldPrice: 999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "iPad Air M1", price: 749.99, oldPrice: 899.99, badge: "Sale", image: "https://images.unsplash.com/photo-1589739900266-43b2843f4c12?w=400&q=80", colors: ["#93c5fd", "#fce7f3", "#e7e5e4"] },
        { name: "Microsoft Surface Go 3", price: 549.99, oldPrice: 649.99, badge: "Sale", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Lenovo Tab P12 Pro", price: 699.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Xiaomi Pad 6 Pro", price: 499.99, oldPrice: 599.99, badge: "Hot", image: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "iPad Mini 6", price: 499.99, oldPrice: 599.99, badge: "Sale", image: "https://images.unsplash.com/photo-1600087626560-dc0a5e29a0b6?w=400&q=80", colors: ["#fce7f3", "#e7e5e4", "#1c1917"] },
        { name: "Huawei MatePad Pro", price: 649.99, oldPrice: 799.99, badge: "Sale", image: "https://images.unsplash.com/photo-1604398088635-5d0b2e6a8048?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Amazon Fire HD 10", price: 149.99, oldPrice: 199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Asus ZenPad 3S", price: 349.99, oldPrice: 449.99, badge: "Sale", image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80", colors: ["#e7e5e4"] },
      ]
    },
    {
      name: "Audio",
      items: [
        { name: "Sony WH-1000XM5", price: 349.99, oldPrice: 449.99, badge: "Sale", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "AirPods Pro 2nd Gen", price: 249.99, oldPrice: 299.99, badge: "Bestseller", image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Bose QuietComfort 45", price: 279.99, oldPrice: 349.99, badge: "Sale", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Samsung Galaxy Buds2 Pro", price: 199.99, oldPrice: 249.99, badge: "Sale", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&q=80", colors: ["#7c3aed", "#e7e5e4", "#1c1917"] },
        { name: "Jabra Evolve2 85", price: 449.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "JBL Flip 6", price: 129.99, oldPrice: 159.99, badge: "Hot", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80", colors: ["#ef4444", "#3b82f6", "#1c1917"] },
        { name: "Sonos Era 300", price: 449.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Sennheiser Momentum 4", price: 349.99, oldPrice: 399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Marshall Stanmore III", price: 399.99, oldPrice: 499.99, badge: "Sale", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", colors: ["#1c1917"] },
        { name: "Bang Olufsen Beoplay", price: 699.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&q=80", colors: ["#e7e5e4", "#d4af37"] },
      ]
    },
    {
      name: "Wearables",
      items: [
        { name: "Apple Watch Ultra 2", price: 799.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1523475496153-3566e75c9a28?w=400&q=80", colors: ["#e7e5e4", "#d4af37"] },
        { name: "Samsung Galaxy Watch 6", price: 299.99, oldPrice: 399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Fitbit Sense 2", price: 249.99, oldPrice: 299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Garmin Fenix 7", price: 699.99, oldPrice: 799.99, badge: "Hot", image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Google Pixel Watch 2", price: 349.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&q=80", colors: ["#1c1917", "#d4af37"] },
        { name: "Xiaomi Band 8 Pro", price: 79.99, oldPrice: 99.99, badge: "Sale", image: "https://images.unsplash.com/photo-1617197777006-c2f47d5e1374?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Huawei Watch GT 4", price: 299.99, oldPrice: 349.99, badge: "Sale", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80", colors: ["#e7e5e4", "#d4af37"] },
        { name: "Amazfit GTR 4", price: 199.99, oldPrice: 249.99, badge: "Sale", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Polar Vantage V3", price: 599.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Withings ScanWatch 2", price: 349.99, oldPrice: 399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
      ]
    },
    {
      name: "Cameras",
      items: [
        { name: "Canon EOS R6 Mark II", price: 2499.99, oldPrice: 2799.99, badge: "Hot", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80", colors: ["#1c1917"] },
        { name: "Sony Alpha A7 IV", price: 2499.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&q=80", colors: ["#1c1917"] },
        { name: "Nikon Z8", price: 3999.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400&q=80", colors: ["#1c1917"] },
        { name: "Fujifilm X-T5", price: 1699.99, oldPrice: 1999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "DJI Mini 4 Pro", price: 759.99, oldPrice: 899.99, badge: "Sale", image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "GoPro Hero 12", price: 399.99, oldPrice: 449.99, badge: "Hot", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", colors: ["#1c1917"] },
        { name: "Panasonic Lumix S5 II", price: 1999.99, oldPrice: 2299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1606986628253-81b4e5f6b8a5?w=400&q=80", colors: ["#1c1917"] },
        { name: "Olympus OM-5", price: 1199.99, oldPrice: 1399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c343?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Canon PowerShot V10", price: 399.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Insta360 X3", price: 449.99, oldPrice: 499.99, badge: "Sale", image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&q=80", colors: ["#1c1917"] },
      ]
    },
    {
      name: "Gaming",
      items: [
        { name: "PlayStation 5 Slim", price: 449.99, oldPrice: null, badge: "Hot", image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&q=80", colors: ["#e7e5e4", "#3b82f6"] },
        { name: "Xbox Series X", price: 499.99, oldPrice: null, badge: "Hot", image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=400&q=80", colors: ["#1c1917"] },
        { name: "Nintendo Switch OLED", price: 349.99, oldPrice: 399.99, badge: "Sale", image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&q=80", colors: ["#e7e5e4", "#ef4444"] },
        { name: "Steam Deck OLED", price: 549.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&q=80", colors: ["#1c1917"] },
        { name: "Razer DeathAdder V3", price: 99.99, oldPrice: 129.99, badge: "Sale", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", colors: ["#1c1917"] },
        { name: "Logitech G Pro X Keyboard", price: 149.99, oldPrice: 199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80", colors: ["#1c1917"] },
        { name: "HyperX Cloud Alpha", price: 99.99, oldPrice: 129.99, badge: "Sale", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&q=80", colors: ["#ef4444", "#1c1917"] },
        { name: "Xbox Elite Controller 2", price: 179.99, oldPrice: 199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80", colors: ["#1c1917"] },
        { name: "Corsair HS80 RGB", price: 99.99, oldPrice: 129.99, badge: "Sale", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80", colors: ["#1c1917", "#f59e0b"] },
        { name: "SteelSeries Arctis Nova 7", price: 149.99, oldPrice: 179.99, badge: "Sale", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
      ]
    },
    {
      name: "TVs",
      items: [
        { name: "Samsung 65 QLED 4K", price: 1299.99, oldPrice: 1799.99, badge: "Sale", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=400&q=80", colors: ["#1c1917"] },
        { name: "LG OLED C3 55", price: 1499.99, oldPrice: 1999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80", colors: ["#1c1917"] },
        { name: "Sony Bravia XR 77", price: 2999.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=400&q=80", colors: ["#1c1917"] },
        { name: "TCL QM8 75", price: 999.99, oldPrice: 1299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=400&q=80", colors: ["#1c1917"] },
        { name: "Hisense U8K 65", price: 1099.99, oldPrice: 1399.99, badge: "Hot", image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=400&q=80", colors: ["#1c1917"] },
        { name: "Philips OLED 818", price: 1799.99, oldPrice: 2199.99, badge: "Sale", image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&q=80", colors: ["#1c1917"] },
        { name: "Panasonic MZ2000", price: 2499.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&q=80", colors: ["#1c1917"] },
        { name: "Amazon Fire TV 4K", price: 449.99, oldPrice: 599.99, badge: "Sale", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", colors: ["#1c1917"] },
        { name: "Vizio P Series 65", price: 799.99, oldPrice: 999.99, badge: "Sale", image: "https://images.unsplash.com/photo-1613690399151-65ea69478674?w=400&q=80", colors: ["#1c1917"] },
        { name: "Sharp Aquos 4K 70", price: 699.99, oldPrice: 899.99, badge: "Sale", image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80", colors: ["#1c1917"] },
      ]
    },
    {
      name: "Smart Home",
      items: [
        { name: "Amazon Echo Show 10", price: 249.99, oldPrice: 299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Google Nest Hub Max", price: 229.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Philips Hue Starter Kit", price: 199.99, oldPrice: 249.99, badge: "Sale", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&q=80", colors: ["#e7e5e4", "#fef3c7"] },
        { name: "Ring Video Doorbell Pro 2", price: 249.99, oldPrice: 299.99, badge: "Sale", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Nest Learning Thermostat", price: 249.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1567361808960-dec9cb578182?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Arlo Pro 4 Camera", price: 199.99, oldPrice: 249.99, badge: "Sale", image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Samsung SmartThings Hub", price: 129.99, oldPrice: 159.99, badge: "Sale", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Apple HomePod Mini", price: 99.99, oldPrice: null, badge: "New", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80", colors: ["#e7e5e4", "#1c1917", "#f59e0b"] },
        { name: "Eufy RoboVac X8 Pro", price: 499.99, oldPrice: 599.99, badge: "Hot", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "iRobot Roomba j7+", price: 599.99, oldPrice: 799.99, badge: "Sale", image: "https://images.unsplash.com/photo-1589742703807-4a8fd6ea4e1e?w=400&q=80", colors: ["#1c1917"] },
      ]
    },
    {
      name: "Accessories",
      items: [
        { name: "Anker 65W GaN Charger", price: 49.99, oldPrice: 69.99, badge: "Sale", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Belkin MagSafe Wireless", price: 39.99, oldPrice: 49.99, badge: "Sale", image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Samsung 1TB SSD T7", price: 119.99, oldPrice: 149.99, badge: "Sale", image: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=400&q=80", colors: ["#3b82f6", "#1c1917"] },
        { name: "Apple USB-C Hub 7-in-1", price: 79.99, oldPrice: 99.99, badge: "Sale", image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&q=80", colors: ["#e7e5e4"] },
        { name: "Logitech MX Master 3S", price: 99.99, oldPrice: 119.99, badge: "Hot", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "Keychron K8 Keyboard", price: 89.99, oldPrice: 109.99, badge: "Sale", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80", colors: ["#e7e5e4", "#1c1917"] },
        { name: "Dell 27 4K Monitor", price: 549.99, oldPrice: 699.99, badge: "Sale", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80", colors: ["#1c1917"] },
        { name: "Elgato Stream Deck MK2", price: 149.99, oldPrice: 179.99, badge: "Sale", image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400&q=80", colors: ["#1c1917"] },
        { name: "Rode NT-USB Mini", price: 99.99, oldPrice: 119.99, badge: "Sale", image: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?w=400&q=80", colors: ["#1c1917", "#e7e5e4"] },
        { name: "WD 4TB My Passport", price: 99.99, oldPrice: 129.99, badge: "Sale", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&q=80", colors: ["#1c1917", "#3b82f6", "#ef4444"] },
      ]
    },
  ];

  let id = 1;
  const allProducts = [];

  categories.forEach(cat => {
    cat.items.forEach(item => {
      allProducts.push({
        id: id++,
        name: item.name,
        price: item.price,
        oldPrice: item.oldPrice,
        rating: parseFloat((4.0 + Math.random()).toFixed(1)),
        reviews: Math.floor(Math.random() * 5000) + 100,
        badge: item.badge,
        category: cat.name,
        colors: item.colors,
        image: item.image,
      });
    });
  });

  return allProducts;
};

export const allProducts = generateProducts();

// Categories
export const categories = [
  { id: 1, name: "Phones", icon: "📱", count: 10 },
  { id: 2, name: "Laptops", icon: "💻", count: 10 },
  { id: 3, name: "Tablets", icon: "📟", count: 10 },
  { id: 4, name: "Audio", icon: "🎧", count: 10 },
  { id: 5, name: "Wearables", icon: "⌚", count: 10 },
  { id: 6, name: "Cameras", icon: "📷", count: 10 },
  { id: 7, name: "Gaming", icon: "🎮", count: 10 },
  { id: 8, name: "TVs", icon: "📺", count: 10 },
  { id: 9, name: "Smart Home", icon: "🏠", count: 10 },
  { id: 10, name: "Accessories", icon: "🔌", count: 10 },
];

// Helper functions
export const getByCategory = (cat) => allProducts.filter(p => p.category === cat);
export const getFeatured = () => allProducts.slice(0, 8);
export const getBestSellers = () => allProducts.filter(p => p.badge === "Bestseller" || p.badge === "Hot").slice(0, 8);
export const getNewArrivals = () => allProducts.filter(p => p.badge === "New").slice(0, 8);
export const getSaleProducts = () => allProducts.filter(p => p.oldPrice !== null).slice(0, 8);

export const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Sony" },
  { id: 4, name: "Dell" },
  { id: 5, name: "LG" },
  { id: 6, name: "Canon" },
  { id: 7, name: "Microsoft" },
  { id: 8, name: "Asus" },
];