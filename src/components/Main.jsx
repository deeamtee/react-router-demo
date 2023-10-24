import './Main.css';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';

export const Main = ({ searchQuery, handleChange, isSubmitted, cards, onAction, onSubmit }) => {
    const [state, setState] = useState(10);
    
    useEffect(() => {
        onAction(state)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({ target: event.target, name: 'My form' })
    }

    return (
        <div className='App'>
        <div className="App-content">
          <form className="App-search" onSubmit={handleSubmit}>
            <Input placeholder={'Search free high-resolution photos'} onChange={handleChange} value={searchQuery} />
            <Button type='submit'>Search</Button>
          </form>
          <div className="App-cards">
            {!isSubmitted && cards.map((item) => {
              return <Card key={item.id} {...item} />
            })}
            {isSubmitted && <Spinner />}
          </div>

        </div>
      </div>
    );
}
