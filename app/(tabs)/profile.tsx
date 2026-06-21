import Container from '@/components/ui/Container'
import { Link } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

export default function Profile() {
  return (
    <Container>
      <Text>Profile</Text>
      <Link href={"/(auth)/SignIn"}>auth </Link>
    </Container>
  )
}