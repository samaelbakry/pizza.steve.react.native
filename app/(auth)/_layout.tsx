import Container from '@/components/ui/Container'
import { Stack } from 'expo-router'
import React from 'react'

export default function AuthLayout() {
  return (
    <Container>
      <Stack screenOptions={{headerShown:false}}/>
    </Container>
  )
}