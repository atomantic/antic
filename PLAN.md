# Infinite Joke Agent Plan

## Objective

To create a system that continuously generates, evaluates, and adds new one-liner jokes to this repository, with the ultimate goal of discovering the funniest joke in the world.

## Phases

### Phase 1: Joke Generation

- Use a large language model (LLM) to generate new one-liner jokes.
- The jokes should be in the style of the existing jokes in `src/jokes.js`.
- The output should be a single string.

### Phase 2: Joke Integration

- Create a script that takes a new joke as input.
- The script will read `src/jokes.js`.
- It will parse the JavaScript array of jokes.
- It will add the new joke to the array.
- It will write the updated array back to `src/jokes.js`, maintaining the existing formatting.

### Phase 3: Joke Evaluation

- Develop a rating system for the jokes.
- The rating system will be based on an LLM evaluation.
- The LLM will be prompted to rate the joke on a scale of 1 to 10 for funniness, originality, and cleverness.
- The ratings will be stored in a separate file, perhaps `jokes-ratings.json`, mapping each joke to its rating.

### Phase 4: The Infinite Loop

- Create a main script that orchestrates the process.
- The script will:
    1. Generate a new joke.
    2. Integrate the joke into `src/jokes.js`.
    3. Evaluate the joke and store the rating.
    4. Repeat.
- The process will run until stopped manually.

## Finding the Funniest Joke

- The "funniest joke in the world" is a moving target.
- We will define "funniest" as the joke with the highest rating in our system.
- The agent will continuously strive to generate a joke with a higher rating than the current best.

## Future Enhancements

- User feedback mechanism for rating jokes.
- A web interface to display the jokes and their ratings.
- More sophisticated joke generation techniques.
