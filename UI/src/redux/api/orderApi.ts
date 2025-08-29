import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get all orders
    getAllOrders: builder.query({
      query: () => ({
        url: "/payment",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),

    // ✅ Update order status
    updateOrderStatus: builder.mutation({
      query: ({ id, orderStatus }) => ({
        url: `/payment/${id}/status`,
        method: "PUT",
        body: { orderStatus },
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useUpdateOrderStatusMutation,
} = orderApi;
