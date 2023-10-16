const initialState = {
  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Shopping list',
      description: 'What I want to buy to my home'
   }
 ],
  
  columns: [
    {
      listId: '1',
      id: 1,
      title: 'Books',
      iconId: 6,
    },
    {
      listId: '1',
      id: 2,
      title: 'Movies',
      iconId: 5,
    },
    {
      listId: '1',
      id: 3,
      title: 'Games',
      iconId: 7,
    },
    {
      listId: '2',
      id: 4,
      title: 'Furnitures',
      iconId: 7,
    },
    {
      listId: '2',
      id: 5,
      title: 'Flora',
      iconId: 7,
    },
    {
      listId: '2',
      id: 6,
      title: 'Kitchen',
      iconId: 7,
    }

  ],

  cards: [
    { id: 1, columnId: 1, title: 'This is Going to Hurt', isFavorite: false },
    { id: 2, columnId: 1, title: 'Interpreter of Maladies', isFavorite: false },
    { id: 3, columnId: 2, title: 'Harry Potter', isFavorite: false },
    { id: 4, columnId: 2, title: 'Star Wars', isFavorite: false },
    { id: 5, columnId: 3, title: 'The Witcher', isFavorite: false },
    { id: 6, columnId: 3, title: 'Skyrim', isFavorite: false }
  ],

  icons: [
    { id: 1, iconName: 'clipboard' },
    { id: 2, iconName: 'laptop' },
    { id: 3, iconName: 'gift' },
    { id: 4, iconName: 'car' },
    { id: 5, iconName: 'film' },
    { id: 6, iconName: 'book' },
    { id: 7, iconName: 'gamepad' },
    { id: 8, iconName: 'bicycle' },
    { id: 9, iconName: 'paw' },
    { id: 10, iconName: 'suitcase' },
    { id: 11, iconName: 'map' },
    { id: 12, iconName: 'stethoscope' },
  ],

  searchText:'',
};

export default initialState;