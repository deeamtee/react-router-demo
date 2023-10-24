import { useState } from 'react';
import api from './utils/api';
import './App.css';
import Input from './components/Input'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [searchQuery, setSearchQuery] = useState('dog');
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = () => {
    api.search(searchQuery).then(({ results }) => {
      const array = results.map((item) => {
        return ({
          id: item.id,
          src: item.urls.regular,
          alt: item.alt_description,
          title: item.description,
          subtitle: item.user.name,
        })
      })

      setCards(array);
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className='App'>
    <div className="App-content">
      <div className="App-search">
        <Input placeholder={'Search free high-resolution photos'} />
        <Button onClick={handleClick}>Search</Button>
      </div>
      <div className="App-cards">
        {!isLoading && cards.map((item) => {
          return <Card key={item.id} {...item} />
        })}
        {isLoading && <Spinner />}
      </div>

    </div>
  </div>
  )
}

export default App
