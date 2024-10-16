"use server";

import { auth } from "@clerk/nextjs/server";
import axios from "axios";
import { log } from "./logger";

const { AURINKO_CLIENT_ID, NEXT_PUBLIC_URL, AURINKO_CLIENT_SECRET } =
  process.env;

export const getAurinkoAuthUrl = async (
  serviceType: "Google" | "Office365",
) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const params = new URLSearchParams({
    clientId: AURINKO_CLIENT_ID as string,
    serviceType,
    scopes: "Mail.Read Mail.ReadWrite Mail.Send Mail.Drafts Mail.All",
    responseType: "code",
    returnUrl: `${NEXT_PUBLIC_URL}/api/aurinko/callback`,
  });

  return `https://api.aurinko.io/v1/auth/authorize?${params.toString()}`;
};

export const exchangeCodeForToken = async (code: string) => {
  try {
    const response = await axios.post(
      `https://api.aurinko.io/v1/auth/token/${code}`,
      {},
      {
        auth: {
          username: AURINKO_CLIENT_ID as string,
          password: AURINKO_CLIENT_SECRET as string,
        },
      },
    );
    console.log(response.data);
    return response.data as {
      accountId: number;
      accessToken: string;
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    console.log(error);
  }
};

export const getAccountDetails = async (token: string) => {
  try {
    const response = await axios.get("https://api.aurinko.io/v1/account", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as {
      email: string;
      name: string;
      id: string;
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }
    console.log(error);
  }
};
