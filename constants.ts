
import { SlideType } from './types';
import type { SlideData } from './types';

export const SLIDES_DATA: SlideData[] = [
  {
    type: SlideType.TITLE,
    title: 'Operators in C Programming',
    presenters: ['Derrick Kondwani Mbewe', 'Nathan Muyoba'],
  },
  {
    type: SlideType.CONTENT,
    title: 'Arithmetic Operators',
    operators: '+, -, *, /, %',
    description: 'Used to perform basic mathematical calculations on variables and values.',
    example: 'A driver calculating total fuel cost by multiplying liters by the price per liter.',
    code: 'totalCost = liters * pricePerLiter;',
    imageUrl: 'https://picsum.photos/seed/math/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Relational Operators',
    operators: '==, !=, >, <, >=, <=',
    description: 'Used to compare two values and are essential for decision-making in programs.',
    example: 'A bank system checking if a balance is sufficient before allowing a withdrawal.',
    code: 'if (balance >= withdrawalAmount) { ... }',
    imageUrl: 'https://picsum.photos/seed/bank/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Logical Operators',
    operators: '&&, ||, !',
    description: 'Used to combine multiple conditions to control program flow.',
    example: 'An online login system verifying both username and password before granting access.',
    code: 'if (isUsernameCorrect && isPasswordCorrect) { ... }',
    imageUrl: 'https://picsum.photos/seed/login/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Assignment Operators',
    operators: '=, +=, -=, *=, /=',
    description: 'Used to assign values to variables, with shorthand forms for common operations.',
    example: 'Updating an employee’s pay by adding a performance bonus to their salary.',
    code: 'salary += bonus;',
    imageUrl: 'https://picsum.photos/seed/salary/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Increment & Decrement Operators',
    operators: '++, --',
    description: 'Used to increase or decrease a value by one, commonly found in loops.',
    example: 'A supermarket billing system counting items as they are scanned by the cashier.',
    code: 'itemCount++;',
    imageUrl: 'https://picsum.photos/seed/cart/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Bitwise Operators',
    operators: '&, |, ^, ~, <<, >>',
    description: 'Work directly on the binary bits of numbers, used for low-level programming.',
    example: 'Controlling sensors by turning specific bits on or off in a hardware register.',
    code: 'register |= (1 << 5); // Set the 5th bit',
    imageUrl: 'https://picsum.photos/seed/hardware/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Conditional (Ternary) Operator',
    operators: '?:',
    description: 'A shorthand for simple if-else statements, making code more concise.',
    example: 'Grading an exam by assigning "Pass" or "Fail" based on a score.',
    code: 'grade = (score >= 50) ? "Pass" : "Fail";',
    imageUrl: 'https://picsum.photos/seed/exam/600/400',
  },
  {
    type: SlideType.CONTENT,
    title: 'Comma Operator',
    operators: ',',
    description: 'Allows multiple expressions to be evaluated in a single statement, often in loops.',
    example: 'Initializing multiple variables or performing multiple updates in a for loop header.',
    code: 'x = (y = 5, y + 2); // y becomes 5, x becomes 7',
    imageUrl: 'https://picsum.photos/seed/sequence/600/400',
  },
  {
    type: SlideType.END,
    title: 'Thank You!',
    presenters: ['Derrick Kondwani Mbewe', 'Nathan Muyoba'],
  },
];
   