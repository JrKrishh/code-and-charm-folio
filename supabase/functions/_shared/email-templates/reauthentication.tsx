/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Your verification code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>★ SECRET CODE ★</Section>
        <Heading style={h1}>CONFIRM IT'S YOU</Heading>
        <Text style={text}>Use the code below to confirm your identity:</Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          This code expires shortly. Didn't request it? Safely ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Georgia, "Roboto Slab", serif',
}
const container = {
  padding: '32px 28px',
  maxWidth: '560px',
  border: '3px solid hsl(210, 29%, 24%)',
  borderRadius: '12px',
  margin: '24px auto',
  backgroundColor: 'hsl(48, 60%, 97%)',
  textAlign: 'center' as const,
}
const badge = {
  display: 'inline-block',
  backgroundColor: 'hsl(47, 86%, 70%)',
  color: 'hsl(210, 29%, 24%)',
  border: '2px solid hsl(210, 29%, 24%)',
  borderRadius: '999px',
  padding: '4px 14px',
  fontSize: '12px',
  fontWeight: 'bold' as const,
  letterSpacing: '2px',
  margin: '0 0 16px',
}
const h1 = {
  fontSize: '32px',
  fontWeight: 900 as const,
  color: 'hsl(6, 63%, 46%)',
  letterSpacing: '1px',
  margin: '0 0 20px',
  textTransform: 'uppercase' as const,
}
const text = {
  fontSize: '15px',
  color: 'hsl(210, 29%, 24%)',
  lineHeight: '1.6',
  margin: '0 0 20px',
}
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '32px',
  fontWeight: 'bold' as const,
  color: 'hsl(6, 63%, 46%)',
  letterSpacing: '6px',
  backgroundColor: 'hsl(47, 86%, 70%)',
  border: '3px solid hsl(210, 29%, 24%)',
  borderRadius: '12px',
  padding: '16px 20px',
  margin: '0 0 30px',
  display: 'inline-block',
}
const footer = {
  fontSize: '12px',
  color: 'hsl(210, 29%, 35%)',
  margin: '32px 0 0',
  fontStyle: 'italic' as const,
}
