import axios from "axios";
import { QuestionsResponse } from "@/types/questions";

interface QuestionDTO {
  to_user_id: number;
  isAnonymous: boolean;
  question: string;
}

interface RegisterDTO {
  username: string;
  email: string;
  password: string;
}

interface TokenResponse {
  access_token: string;
  token_type: string;
}

export const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (username: string, password: string) => {
  return api.post<TokenResponse>("/login", { username, password });
};

export const register = async (data: RegisterDTO) => {
  return api.post("/register", { data });
};

export const postQuestion = async (question: QuestionDTO) => {
  return api.post("/posts", { ...question });
};

export const getUser = async (username: string) => {
  return api.get(`/users/${username}`);
};

export const getQuestions = async (username: string) => {
  return api.get<QuestionsResponse>(`/posts/${username}`);
};
