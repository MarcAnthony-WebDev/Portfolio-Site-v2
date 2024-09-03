import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import colors from "tailwindcss/colors";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
  isAdmin?: boolean;
}

export const EmailTemplate = ({
  firstName,
  email,
  message,
  isAdmin = false,
}: EmailTemplateProps & { isAdmin?: boolean }) => (
  <Html>
    <Head />
    <Preview>
      {isAdmin
        ? "New Contact Form Submission"
        : "Thank you for reaching out to us!"}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img src={""} width="170" height="50" alt="Logo" style={logo} />
        {isAdmin ? (
          <>
            <Text style={paragraph}>
              New message from {firstName} ({email}):
            </Text>
            <Text style={paragraph}>{message}</Text>
            <Text style={paragraph}>This is an admin notification.</Text>
          </>
        ) : (
          <>
            <Text style={paragraph}>Hi {firstName},</Text>
            <Text style={paragraph}>
              Thank you for visiting my website and reaching out to me! I will
              get back to you as soon as possible.
            </Text>
            <Text style={paragraph}>
              Best,
              <br />
              Marcanthony Tumminello
            </Text>
          </>
        )}
        <Hr style={hr} />
        <Text style={footer}>Thank you for your time!</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "royalblue",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
