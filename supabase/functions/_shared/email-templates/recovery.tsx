/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>BAM! Reset your password for {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>★ PASSWORD RESCUE ★</Section>
        <Heading style={h1}>FORGOT YOUR CODE?</Heading>
        <Text style={text}>
          No worries, hero. We got a request to reset your password for{' '}
          <strong>{siteName}</strong>. Hit the button below to set a new one.
        </Text>
        <Button style={button} href={confirmationUrl}>
          POW! Reset Password →
        </Button>
        <Text style={footer}>
          Didn't ask for this? Ignore this email — your password stays safe.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

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
  fontSize: '34px',
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
