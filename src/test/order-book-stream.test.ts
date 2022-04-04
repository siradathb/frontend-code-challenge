import orderBookStream from "../order-book-stream";

const orderBook = orderBookStream;
const orderBuy = { price: "1.23", amount: "3.00" };
const orderSell = { price: "2.03", amount: "3.00" };

test("subscribe function - should be generate 10 mockup data for each side", () => {
  orderBook.subscribe((data) => {
    const { buy, sell } = data;
    expect(buy.length).toEqual(10);
    expect(sell.length).toEqual(10);
  });
});

test("add order - should be add order in userOrder (buy side)", () => {
  orderBook.addOrder("buy", orderBuy);
  expect(orderBook.userOrder.buy).toEqual([orderBuy]);
});

test("add order - should be add order in userOrder (sell side)", () => {
  orderBook.addOrder("sell", orderSell);
  expect(orderBook.userOrder.sell).toEqual([orderSell]);
});

test("add order - after add both side userOrder should keep data as expect.", () => {
  expect(orderBook.userOrder.buy).toEqual([orderBuy]);
  expect(orderBook.userOrder.sell).toEqual([orderSell]);
});

test("produce data - concat data from mock up and user order", () => {
  expect(orderBook.produceData().buy.length).toEqual(11);
  expect(orderBook.produceData().sell.length).toEqual(11);
  expect(orderBook.produceData().buy.includes(orderBuy)).toEqual(true);
  expect(orderBook.produceData().sell.includes(orderSell)).toEqual(true);
});

test("Destroy interval function - function should be destory and interval id should be undefined.", () => {
  orderBook.destroy();
  expect(orderBook.intervalId).toEqual(undefined);
});
