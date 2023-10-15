import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypesList";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `auth/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.User],
    }),
    userRegister: build.mutation({
      query: (registerData) => ({
        url: `auth/signup`,
        method: "POST",
        data: registerData,
      }),
    invalidatesTags: [tagTypes.User],
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
