// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axiosInstance from "../services";
import axiosInstanceMedia from "../services/axiosMedia";

export const login = (data) => {
  return axiosInstance.post(`/login/`,data);
};

export const register = (data) => {
  return axiosInstance.post(`/register/`,data);
};

export const search = (data) => {
  return axiosInstance.post(`/search-candidates/`,data);
};

export const likeCandidate = (data) => {
  return axiosInstance.post(`/like-candidate/`,data);
};

export const getCandidates = (data) => {
  return axiosInstance.get(`/get-candidates/`);
};

export const removeCandidate = (id) => {
  return axiosInstance.delete(`/remove-candidate/${id}`);
};


export  const getNextCandidates = (params) => {
  return axiosInstance.get(`/get-next-page${params}`);
};

