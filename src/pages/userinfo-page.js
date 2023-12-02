import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getUserInfo } from "../services/message.service";

export const UserInfoPage = () => {
  const [message, setMessage] = useState("");

  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { data, error } = await getUserInfo(accessToken, user.sub);

      if (!isMounted) {
        return;
      }

      if (data) {
        setMessage(JSON.stringify(data, null, 2));
      }

      if (error) {
        setMessage(JSON.stringify(error, null, 2));
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          UserInfo page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves the <strong>user info</strong> from Auth0.
            </span>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <CodeSnippet title="UserInfo Message" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};
