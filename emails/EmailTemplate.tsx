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
  lastName:string;
  email: string;
  phone?:string;
  company?:string;
  inquiryType: string[];
  message: string;
  isAdmin?: boolean;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  inquiryType,
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
        {/* <Img
          src="marctummi.com/images/MT-logo-bold.png"
          width="170"
          height="50"
          alt="Logo"
          style={logo}
        /> */}
        {isAdmin ? (
          <>
            <Text style={paragraph}>
              <strong>New message from:</strong> {firstName} {lastName} ({email})
            </Text>

            {phone && <Text style={paragraph}><strong>Phone:</strong> {phone}</Text>}
            {company && <Text style={paragraph}><strong>Company:</strong> {company}</Text>}
            
            <Text style={paragraph}><strong>Inquiry Type:</strong> {inquiryType}</Text>
            <Text style={paragraph}><strong>Message:</strong> {message}</Text>

            <Text style={paragraph}>This is an admin notification.</Text>
          </>
        ) : (
          <>
            <Text style={paragraph}>Hi {firstName},</Text>
            <Text style={paragraph}>
              Thanks for stopping by my website! It&apos;s great to hear from
              you, and I&apos;m looking forward to connecting!
            </Text>
            <Text style={paragraph}>
              Best,
              <br />
              Marcanthony Tumminello
            </Text>
          </>
        )}
        <Hr style={hr} />
        <Text style={footer}>Your time and interest mean a lot—thank you!</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: "#111827",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  borderRadius: "16px",
  padding: "2rem",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "22px",
  lineHeight: "26px",
  color: "#fff",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
