import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EMAIL_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const makeAppointment = (url, data) => axiosInstance.post(url, data);
export const dentalImplantsAndFullMouthMailSender = (url, data) =>
  axiosInstance.post(url, data);
export const invisalignMailSender = (url, data) =>
  axiosInstance.post(url, data);
