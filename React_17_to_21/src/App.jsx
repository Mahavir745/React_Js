import React from 'react'
import Fragments from './component/Fragments'
import MapMethod from './component/MapMethod'
import Conditional from './component/Conditional'
import Passing_pros from './component/Passing_pros'

const App = () => {
  const foodmenu = ["chawal","daal","sabji","idli"]
  return (
    <>
   <Fragments></Fragments>
   <MapMethod></MapMethod>
   <Conditional></Conditional>
   <Passing_pros foodItem={foodmenu}></Passing_pros>
   </>
  )
}

export default App