import { OrderModel } from "./order.model";

const getAllOrdersFromDB = async () => {
  const orders = await OrderModel.find()
    .sort({ createdAt: -1 });
  return orders;
};
const updateOrderStatusInDB = async (id: string, orderStatus: string) => {
  const validStatuses = [
    "PENDING",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "RETURNED",
    "ON_ARRIVAL_PENDING",
    "ON_ARRIVAL_DELIVERED",
  ];

  if (!validStatuses.includes(orderStatus)) {
    throw new Error("Invalid order status value");
  }

  const order = await OrderModel.findByIdAndUpdate(
    id,
    { orderStatus },
    { new: true }
  );

  return order;
};

export const OrderServices = {
  getAllOrdersFromDB,
  updateOrderStatusInDB
};
