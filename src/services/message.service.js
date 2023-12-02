import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;
const domain = process.env.REACT_APP_AUTH0_DOMAIN;

export const getPublicResource = async () => {
  const config = {
    url: `${apiServerUrl}/api/v2/test`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getProtectedResource = async (accessToken, userSub) => {
  const config = {
    url: `${apiServerUrl}/api/v2/auth0search?tecarea=2&uid=${userSub}&pdfrom=20230420&pdto=20230520`,
    //url: `${apiServerUrl}/api/messages/public`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getAdminResource = async (accessToken,userSub) => {
  const config = {
    url: `${apiServerUrl}/api/v2/auth0userprofile?uid=${userSub}`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getUserInfo = async (accessToken) => {
  const config = {
    url: `${domain}/userinfo`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  return {
    data: data || null,
    error,
  };
}