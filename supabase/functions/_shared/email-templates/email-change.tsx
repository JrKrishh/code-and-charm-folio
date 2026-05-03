/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  oldEmail: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Confirm your email change for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>★ EMAIL SWAP ★</Section>
        <Heading style={h1}>NEW SECRET IDENTITY?</Heading>
        <Text style={text}>
          You requested to change your email for <strong>{siteName}</strong>{' '}
          from{' '}
          <Link href={`mailto:${oldEmail}`} style={link}>
            {oldEmail}
          </Link>{' '}
          to{' '}
          <Link href={`mailto:${newEmail}`} style={link}>
            {newEmail}
          </Link>
          .
        </Text>
        <Button style={button} href={confirmationUrl}>
          BAM! Confirm Change →
        </Button>
        <Text style={footer}>
          Didn't request this? Secure your account immediately.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

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
const link = { color: 'hsl(6, 63%, 46%)', textDecoration: 'underline' }
const button = {
  backgroundColor: 'hsl(6, 63%, 46%)',
  color: '#ffffff',
  fontSize: '15px',
  fontWeight: 'bold' as const,
  letterSpacing: '1px',
  borderRadius: '12px',
  padding: '14px 24px',
  textDecoration: 'none',
  border: '3px solid hsl(210, 29%, 24%)',
  textTransform: 'uppercase' as const,
}
const footer = {
  fontSize: '12px',
  color: 'hsl(210, 29%, 35%)',
  margin: '32px 0 0',
  fontStyle: 'italic' as const,
}
