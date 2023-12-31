import { TBooking } from "@/types/booking.types";
import { baseApi } from "../baseApi";
import { IMeta } from "@/types/common";
import { tagTypes } from "../tagTypesList";

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBookings: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/bookings/all-bookings",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: TBooking[], meta: IMeta) => {
        return {
          bookings: response,
          meta,
        };
      },
      providesTags: [tagTypes.Booking],
    }),
    createBooking: build.mutation({
      query: (payload: TBooking) => ({
        url: "/bookings/create-booking",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Booking],
    }),
    // get by id
    getBookingByUserId: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/bookings/all-bookings-by-user`,
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.Booking],
    }),

    // get by id
    getBookingById: build.query({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.Booking],
    }),
    // get by id
    updateBookingById: build.mutation({
      query: (payload) => ({
        url: `/bookings/update-booking/${payload.id}`,
        method: "PATCH",
        data: payload.body,
      }),
      invalidatesTags: [tagTypes.Booking],
    }),
    // get by id
    updateBookingStatusByUser: build.mutation({
      query: ({ id, payload }) => ({
        url: `/bookings/update-booking-status-by-user/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: [tagTypes.Booking, tagTypes.Cart],
    }),
    // get by id
    updateBookingStatusByManagement: build.mutation({
      query: ({ id, payload }) => ({
        url: `/bookings/update-booking-status-by-management/${id}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: [tagTypes.Booking],
    }),
    deleteBookingById: build.mutation({
      query: (id: string) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.Booking],
    }),
  }),
});

export const { 
    useGetAllBookingsQuery,
    useCreateBookingMutation,
    useGetBookingByUserIdQuery,
    useGetBookingByIdQuery,
    useUpdateBookingByIdMutation,
    useDeleteBookingByIdMutation,
    useUpdateBookingStatusByUserMutation,
    useUpdateBookingStatusByManagementMutation
} = bookingApi;