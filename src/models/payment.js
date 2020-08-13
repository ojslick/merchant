class Payment {
  constructor(
    id,
    transactionNo,
    itemType,
    productName,
    time,
    status,
    price,
    createdDate
  ) {
    this.id = id;
    this.transactionNo = transactionNo;
    this.itemType = itemType;
    this.productName = productName;
    this.time = time;
    this.status = status;
    this.price = price;
    this.createdDate = createdDate;
  }
}

export default Payment;
