import Container from '@/components/ui/Container'
import SearchScreen from '@/components/ui/SearchScreen'
import useAppwrite from '@/hooks/useAppwrite'
import { getMenu } from '@/services/appwriteFunctions'
import { useLocalSearchParams } from 'expo-router'
import React, { useEffect } from 'react'

export default function Search() {
  const {category , query} = useLocalSearchParams<{query:string , category:string}>()
  const {data ,refetch}= useAppwrite({fn:getMenu , params:{category , query , limit:6}})

  useEffect(() => {
    refetch({category , query , limit:6})
  }, [query , category , refetch])
  
  return (
    <Container>
      <SearchScreen data={data}/>
    </Container>
  )
}