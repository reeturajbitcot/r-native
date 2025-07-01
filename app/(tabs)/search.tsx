import MovieCard from '@/components/MovieCard'
import SearchBar from '@/components/SearchBar'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'

const Search = () => {
  const [serachQuery, setSearchQuery] = useState('')
  const {data: movies ,
    loading: moviesLoading,
        error: moviesError,
        refetch: loadMovies,
        reset, 
  } = useFetch(() => fetchMovies({query: ""}), false)

  useEffect(() => {
    const func = async () => {
      if(serachQuery.trim()) {
        await loadMovies()
      } else {
        reset()
      }
    }
    func()  
  }, [searchQuery])

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className="flex-1 `absolute w-full z-0" resizeMode="cover" />
      <FlatList data={movies} keyExtractor={(item) => item.id.toString()} className='px-5' numColumns={3} columnWrapperStyle={{justifyContent: 'center',gap: 16, marginVertical: 16}} contentContainerStyle={{paddingBottom:100}} ListHeaderComponent={<><View className='w-full flex-row justify-center mt-20 items-center'> 
        <Image source={icons.logo} className='w-12 h-10' />
        </View>
        <View className='my-5'><SearchBar value={serachQuery} onChangeText={(text: string) => setSearchQuery(text)} placeholder="Search movies..." /></View>
        {moviesLoading && (
          <ActivityIndicator size="large" color="#0000ff" className="my-3" />
        )}
        {moviesError && (
          <Text className='text-red-500 px-5 my-3'>Error: {moviesError?.message}</Text>
        )}
        {!moviesLoading && !moviesError && serachQuery.trim() && movies?.length > 0 && (
          <Text className='text-white font-bold text-xl'>Search  Results for{' '}<Text className="text-accent">
            {serachQuery}
            </Text>
            </Text> )}
        </>} renderItem={(item) => <MovieCard {...item} />} />
    </View>
  )
}

export default Search