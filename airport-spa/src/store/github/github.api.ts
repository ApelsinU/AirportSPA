import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ServerResponse } from '../../models/models'

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (build) => ({
    searchUsers: build.query<ServerResponse, string>({
      query: (search: string) => ({
        url: `users/${search}/repos`,
        params: {
          q: search,
          per_page: 10,
        },
      }),
    }),
    searchRepos: build.query<any, string>({
      query: (name) => `repos/${name}`,
    }),
    /*    searchRepos: build.query<any, string>({
      query: (searchReps: string) => ({
        url: 'repos',
        params: {
          q: searchReps,
        },
      }),
    }), */
  }),
})

export const { useSearchUsersQuery } = githubApi
export const { useSearchReposQuery } = githubApi

// repos{?type,page,per_page,sort}
