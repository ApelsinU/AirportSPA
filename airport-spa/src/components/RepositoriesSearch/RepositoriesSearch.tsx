import React, { useEffect, useState } from 'react'
import './repositories-search.sass'
import { useSearchUsersQuery } from '../../store/github/github.api'
import { useDataWatcher } from '../../hooks/dataWatcher'

export function RepositoriesSearch() {
  const [search, setSearch] = useState('')
  const dataWatcher = useDataWatcher(search)

  const { data, isError } = useSearchUsersQuery(dataWatcher, {
    skip: dataWatcher.length < 3,
  })

  useEffect(() => {
    console.log('search', search)
  }, [dataWatcher])

  console.log('repo', data)

  return (
    <div>
      {isError && <p>API error</p>}
      <h2>Searching GitHub repositories by Username</h2>
      <label htmlFor="repos_search">
        User
        <input
          className="search-input"
          type="text"
          name="repos_search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <h3>All {search} repositories</h3>
      <div>
        {!!data?.length &&
          data.map((repo) => {
            return (
              <div key={repo.id}>
                <p>{repo.name}</p>
                <a href={repo.url}>{repo.url}</a>
              </div>
            )
          })}
      </div>
      <hr />
    </div>
  )
}
