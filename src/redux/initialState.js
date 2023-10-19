const initialState = {
  lists: [
    {
      id: '1',
      title: 'Free time',
      description: 'Interesting things I want to do'
    },
    {
      id: '2',
      title: 'Shopping list for home',
      description: 'What I want to buy this year to my home'
    },
    {
    id: '3',
    title: 'Where to go',
    description: 'The nearest plans and duties'
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
      title: 'Devices',
      iconId: 2,
    },
    {
      listId: '2',
      id: 5,
      title: 'Kitchen',
      iconId: 16,
    },
    {
      listId: '2',
      id: 6,
      title: 'Plants',
      iconId: 13,
    },
    {
      listId: '3',
      id: 7,
      title: 'Travels',
      iconId: 15,
    },
    {
      listId: '3',
      id: 8,
      title: 'Specialists',
      iconId: 12,
    },
    {
      listId: '3',
      id: 9,
      title: 'Bicycle',
      iconId: 8,
    }
  ],

  cards: [
    { id: 1, columnId: 1, title: 'Sherlock Holmes', isFavorite: false },
    { id: 2, columnId: 1, title: 'Hobbit', isFavorite: false },
    { id: 3, columnId: 1, title: 'Forrest Gump', isFavorite: false },
    { id: 4, columnId: 2, title: 'Harry Potter', isFavorite: false },
    { id: 5, columnId: 2, title: 'Star Wars', isFavorite: false },
    { id: 6, columnId: 3, title: 'The Witcher', isFavorite: false },
    { id: 7, columnId: 3, title: 'Counter Strike', isFavorite: false },
    { id: 8, columnId: 3, title: 'The Settlers', isFavorite: false },
    { id: 9, columnId: 3, title: 'GTA 4', isFavorite: false },
    { id: 10, columnId: 4, title: 'Signal amplifier', isFavorite: false },
    { id: 11, columnId: 4, title: 'Juicer', isFavorite: false },
    { id: 12, columnId: 5, title: 'Olives', isFavorite: false },
    { id: 13, columnId: 5, title: 'Tea pot', isFavorite: false },
    { id: 14, columnId: 6, title: 'Ficus Benjamina', isFavorite: false },
    { id: 15, columnId: 7, title: 'Rome, Italy', isFavorite: false },
    { id: 16, columnId: 7, title: 'Tatra Mountains', isFavorite: false },
    { id: 17, columnId: 7, title: 'Baltic Sea', isFavorite: false },
    { id: 18, columnId: 8, title: 'Dentist', isFavorite: false },
    { id: 19, columnId: 8, title: 'Oculist', isFavorite: false },
    { id: 20, columnId: 9, title: 'Green Velo', isFavorite: false },
    { id: 21, columnId: 9, title: 'Somewhere with Jon', isFavorite: false },
    { id: 22, columnId: 9, title: 'To Warsaw', isFavorite: false },
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
    { id: 13, iconName: 'tree' },
    { id: 14, iconName: 'cube' },
    { id: 15, iconName: 'camera-retro' },
    { id: 16, iconName: 'cart-plus' }
  ],

  searchText:'',
};

export default initialState;