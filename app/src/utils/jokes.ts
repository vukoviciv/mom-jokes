export interface Joke {
  setup: string
  punchline: string
}

const jokes: Joke[] = [
  {
    setup: "Why don't skeletons fight each other?",
    punchline: "They don't have the guts.",
  },
  {
    setup: "What do you call cheese that isn't yours?",
    punchline: 'Nacho cheese.',
  },
  {
    setup: 'Why did the scarecrow win an award?',
    punchline: 'Because he was outstanding in his field.',
  },
  { setup: 'How do you organize a space party?', punchline: 'You planet.' },
  {
    setup: 'Why did the math book look sad?',
    punchline: 'Because it had too many problems.',
  },
  {
    setup: "Why can't your nose be 12 inches long?",
    punchline: 'Because then it would be a foot.',
  },
  { setup: 'What do you call fake spaghetti?', punchline: 'An impasta.' },
  {
    setup: 'Why did the coffee file a police report?',
    punchline: 'It got mugged.',
  },
  {
    setup: 'Why do bees have sticky hair?',
    punchline: 'Because they use honeycombs.',
  },
  {
    setup: 'Why did the golfer bring two pairs of pants?',
    punchline: 'In case he got a hole in one.',
  },
  {
    setup: 'What do you call a factory that makes good products?',
    punchline: 'A satisfactory.',
  },
  {
    setup: 'How does a penguin build its house?',
    punchline: 'Igloos it together.',
  },
  {
    setup: 'Why did the bicycle fall over?',
    punchline: 'Because it was two-tired.',
  },
  {
    setup: 'What did one ocean say to the other ocean?',
    punchline: 'Nothing, they just waved.',
  },
  {
    setup: "Why don't eggs tell jokes?",
    punchline: "Because they'd crack each other up.",
  },
  {
    setup: 'How do you make a tissue dance?',
    punchline: 'Put a little boogie in it.',
  },
  {
    setup: 'Why was the math book sad?',
    punchline: 'Because it had too many problems.',
  },
  {
    setup: "Why don't scientists trust atoms?",
    punchline: 'Because they make up everything.',
  },
  {
    setup: 'Why did the tomato turn red?',
    punchline: 'Because it saw the salad dressing.',
  },
  {
    setup: 'What do you call a belt made of watches?',
    punchline: 'A waist of time.',
  },
  {
    setup: 'What do you call a snowman with a six-pack?',
    punchline: 'An abdominal snowman.',
  },
  {
    setup: 'Why did the chicken join a band?',
    punchline: 'Because it had the drumsticks.',
  },
  {
    setup: 'How do you catch a squirrel?',
    punchline: 'Climb a tree and act like a nut.',
  },
  {
    setup: "Why don't some couples go to the gym?",
    punchline: "Because some relationships don't work out.",
  },
  {
    setup: "What do you call an elephant that doesn't matter?",
    punchline: 'An irrelephant.',
  },
  {
    setup: 'Why did the coffee go to the police?',
    punchline: 'Because it got mugged.',
  },
  {
    setup: 'Why did the computer go to the doctor?',
    punchline: 'Because it had a virus.',
  },
  { setup: 'What do you call a sleeping bull?', punchline: 'A bulldozer.' },
  { setup: 'What do you call a pile of cats?', punchline: 'A meowtain.' },
  {
    setup: 'Why did the cookie go to the hospital?',
    punchline: 'Because it felt crummy.',
  },
  {
    setup: "Why don't sharks eat clowns?",
    punchline: 'Because they taste funny.',
  },
  {
    setup: 'What kind of music do mummies listen to?',
    punchline: 'Wrap music.',
  },
  {
    setup: "Why can't your nose be 12 inches long?",
    punchline: 'Because then it would be a foot.',
  },
  {
    setup: 'Why did the orange stop?',
    punchline: 'Because it ran out of juice.',
  },
  { setup: 'How do you organize a party in space?', punchline: 'You planet.' },
  { setup: 'What do you call a cow with no legs?', punchline: 'Ground beef.' },
  {
    setup: 'Why was the big cat disqualified from the race?',
    punchline: 'Because it was a cheetah.',
  },
  {
    setup: 'What do you call a dog magician?',
    punchline: 'A labracadabrador.',
  },
  {
    setup: "Why don't skeletons ever go trick or treating?",
    punchline: 'Because they have no body to go with.',
  },
  {
    setup: 'Why did the scarecrow become a successful neurosurgeon?',
    punchline: 'Because he was outstanding in his field.',
  },
  { setup: 'How do you fix a broken pizza?', punchline: 'With tomato paste.' },
  {
    setup: 'Why was the stadium so cool?',
    punchline: 'Because it was filled with fans.',
  },
  { setup: 'What do you call a lazy kangaroo?', punchline: 'A pouch potato.' },
  {
    setup: 'Why did the tomato blush?',
    punchline: 'Because it saw the salad dressing.',
  },
  {
    setup: 'Why did the mushroom go to the party alone?',
    punchline: "Because he's a fungi.",
  },
  { setup: 'What do you call a fake noodle?', punchline: 'An impasta.' },
  {
    setup: 'Why did the chicken cross the playground?',
    punchline: 'To get to the other slide.',
  },
  {
    setup: 'Why do cows have hooves instead of feet?',
    punchline: 'Because they lactose.',
  },
  {
    setup: 'How do you make holy water?',
    punchline: 'You boil the hell out of it.',
  },
  {
    setup: 'What do you call an apology written in dots and dashes?',
    punchline: 'Re-Morse code.',
  },
]

export const getRandomJoke = () => {
  const jokeIndex = Math.floor(Math.random() * jokes.length)
  return jokes[jokeIndex]
}
