import categories from './data/categories';
import cards from './data/cards';
import Title from './components/Title';
import MenuCard from './components/MenuCard';
import {useState} from 'react';

const App = () => {
  const [menus, setMenus] = useState(cards);
  const handleCategoryBtn = category =>{
    if(category === 'All'){
      setMenus(cards);
    }else{
      category = category.toLowerCase();
      setMenus(cards.filter(card => card.label === category));
    }
  }
  return (
    <div className="App">
      <header className="header">
        <Title categories={categories} onClick={handleCategoryBtn} />
      </header>
      <main className="main">
          {
            menus.map(menu => <MenuCard key={menu.id} {...menu} />)
          }
      </main>
    </div>
  );
}

export default App;
