import React from 'react'
// <Map> is:
//  - Lazy-loaded
//  - Loaded & rendered only in the browser
export default function Page() {
  const [Component, setComponent] = React.useState(() => Loading)

  // useEffect() callbacks are only run in the browser, consequently the map component
  // is loaded and rendered only in the browser.
  React.useEffect(() => {
    // @ts-expect-error The type provided by @types/react is wrong
    setComponent(() => React.lazy(() => import('./Editor')))
  }, [])

  return (
    <React.Suspense fallback={<Loading />}>
      <Component />
    </React.Suspense>
  )
}

function Loading() {
  return <div>Loading editor...</div>
}
