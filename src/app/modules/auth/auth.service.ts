import bcrypt from "bcrypt";
import { prisma } from "../../../lib/prisma";
import { UserRegister } from "./auth.validation";
import { randomUUID } from "crypto";
import { sendVerificationEmail } from "../services/mail.service";

const login = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (!user) {
    throw new Error("Invalid credentials");
  }
  if (!user.isEmailVerified) {
    throw new Error("Please verify your email before login");
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new Error("Invalid credentials");
  }
  const { password, ...rest } = user;
  return rest;
};

const register = async (payload: UserRegister) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  if (isUserExist) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 6);
  const verificationToken = randomUUID();
  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      age: payload.age,
      verificationToken,
      isEmailVerified: false,
    },
  });
  await sendVerificationEmail(user.email, user.name, verificationToken);

  const { password, ...rest } = user;

  return rest;
};

const verifyEmail = async (token: string) => {
  const user = await prisma.user.findFirst({
    where: {
      verificationToken: token,
    },
  });
  if (!user) {
    throw new Error("Invalid or expired verification token");
  }
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      isEmailVerified: true,
      verificationToken: null,
    },
  });

  const { password, ...rest } = updatedUser;

  return rest;
};

const changePassword = async (payload: string) => {
  return payload;
};
const forgotPassword = async (payload: string) => {
  return payload;
};

export const AuthService = {
  login,
  register,
  changePassword,
  forgotPassword,
  verifyEmail,
};
