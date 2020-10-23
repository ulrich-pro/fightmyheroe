export const SET_LIST = 'HEROES_SET_LIST';
export const ADD_ITEM_TO_LIST = 'HEROES_ADD_ITEM_TO_LIST';
export const SELECT_ITEM = 'HEROES_SELECT_ITEM';
export const SET_STARED = 'HEROES_SET_STARED';
export const SET_OPPONENT = 'HEROES_SET_OPPONENT';

const initialHeroe = {
  name: '',
  image: {},
};
// all possible powerstats of an heroe
const ALL_CRITERIAS = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];

const initialState = {
  list: [],
  opponent: initialHeroe,
  selected: initialHeroe, // user selection during a fight
  stared: initialHeroe, // main heroe
  criteria: '', // criteria on which heroes fight
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.list, selected: initialHeroe };
    case ADD_ITEM_TO_LIST:
      // save current state data in the list for history management
      return {
        ...state,
        list: [
          {
            opponent: state.opponent,
            stared: state.stared,
            criteria: state.criteria,
            selected: state.selected,
          },
          ...state.list,
        ],
      };
    case SELECT_ITEM:
      return {
        ...state,
        selected: action.item,
      };
    case SET_OPPONENT:
      return {
        ...state,
        opponent: action.item,
        selected: initialHeroe,
        // re-init each time an opponent is set
        criteria: ALL_CRITERIAS[Math.floor(Math.random() * ALL_CRITERIAS.length)],
      };
    case SET_STARED:
      return { ...state, stared: action.item };
    default:
      return state;
  }
};
