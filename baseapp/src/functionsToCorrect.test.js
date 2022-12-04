import {timeOfDay, getShoppingListByNum} from "./functionsToCorrect";

test ('sending data', () =>{
   const morning = new Date();
   morning.setHours(10);
expect(timeOfDay(morning)).toBe('morning');
const day = new Date();
   day.setHours(14);
expect(timeOfDay(day)).toBe('day');
const evening = new Date();
   evening.setHours(20);
expect(timeOfDay(evening)).toBe('evening');
const night = new Date();
night.setHours(3);
expect(timeOfDay(night)).toBe('night');
})

test('the shopping list has diapers on it', () => {
   const shoppingList1 = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'milk',
  ];
   expect(shoppingList1).toContain('diapers');
})

test('the shopping list has carrot on it', () => {
   const shoppingList2 = [
      'tomatoes',
      'bread',
      'carrot',
      'paper towels',
      'milk',
  ];
   expect(shoppingList2).toContain('carrot');
})

test('the shopping list has milk, cheese on it', () => {
   const shoppingList3 = [
      'porridge',
      'milk',
      'cheese',
      'newspaper',
      'potatoes',
  ];
   expect(shoppingList3).toContain('milk', 'cheese');
})

