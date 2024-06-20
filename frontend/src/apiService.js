// src/apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    // body: JSON.stringify(email)
  },
});

export const submitForm = (formData) => {
  return apiClient.post('/submit_form', formData);
};

export const sendmail = (email) => {
  return apiClient.post('/send_email',JSON.stringify({email}));
};

export const aboutDataa = () => {
  return apiClient.get('/about');
};

export const images  = () => {
  return apiClient.get('/images');
};

export const newsData  = () => {
  return apiClient.get('/newsData');
};

export const classifiedData  = () => {
  return apiClient.get('/classifiedData');
};

export const b2bDataa  = () => {
  return apiClient.get('/b2bDataa');
};

export const seniorr  = () => {
  return apiClient.get('/seniorr');
};