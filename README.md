# CLI Word Counter Documentation

## Introduction

The CLI Word Counter is a simple command-line interface (CLI) program written in TypeScript. This program counts the number of words, characters, and spaces in a given input sentence. It provides a convenient way to analyze textual data directly from the command line.

## Installation

To use the CLI Word Counter, ensure that you have Node.js and npm installed on your system. Then, follow these steps:

1. Open your terminal or command prompt.
2. Run the following command to install the necessary dependencies:

    ```bash
    npm install -g cli-typescript-word-count
    ```

## Usage

You can use the CLI Word Counter by following these steps:

1. Open your terminal or command prompt.
2. Run the following command:

    ```bash
    npx cli-typescript-word-count
    ```

3. You will be prompted to enter a sentence. Type in the sentence and press `Enter`.
4. The program will display the word count, character count, and space count for the entered sentence.

## Example

Let's demonstrate how to use the CLI Word Counter with an example:

```bash
npx cli-typescript-word-count
```

Prompt:
```
Enter your sentence:
```

User Input:
```
This is a sample sentence.
```

Output:
```
Word Count: 5
Character Count: 24
Space Count: 4
```

## Algorithm

The CLI Word Counter uses a straightforward algorithm to count the words, characters, and spaces in the input sentence. Here's a brief overview of the algorithm:

1. Initialize counters for word count, character count, space count, and a flag to track if the current character is inside a word.
2. Iterate through each character in the input string.
3. If the character is a space, increment the space count and skip consecutive spaces.
4. If the character is not a space, increment the character count. If it's the start of a new word, increment the word count.
5. Return the counts.

## Conclusion

The CLI Word Counter provides a quick and easy way to analyze textual data from the command line. Whether you need to count words, characters, or spaces, this program simplifies the process and enhances productivity. Feel free to use it in your projects or daily tasks to streamline text analysis operations.

For any inquiries or feedback, please contact the developer:

**Developer**: Huzaifa Ahmed  
**Email**: [huzaifasaleem098@gmail.com](mailto:huzaifasaleem098@gmail.com)  
**GitHub**: [https://github.com/0xhuzaifa](https://github.com/0xhuzaifa)