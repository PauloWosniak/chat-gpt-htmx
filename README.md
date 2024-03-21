# Chat ~~GPT~~ Geppetto

Simple project to study the implementation of chat GPT API with HTMX and Node.js.

## Key Technologies
- HTMX: An innovative approach to modern web development, allowing for dynamic updates to web pages without the need for JavaScript frameworks. [Learn more](https://htmx.org)
- Node.js: The backbone of our server-side logic, providing the runtime environment necessary for executing our application. [Learn more](https://nodejs.org)
- OpenAI API: The engine behind our AI-driven interactions. [Get your API key](https://platform.openai.com/api-keys)
- Handlebars: A minimalist templating engine, used to render HTML templates with ease. [Learn more](https://handlebarsjs.com)

## Setup Instructions
### Pre-requisites
Before diving into the installation process, ensure you have the following prepared:

- A copy of the .env.example file renamed to .env, stripping off the .example extension.
- An active OpenAI API key, which can be obtained [here](https://platform.openai.com/api-keys). Verify your account's credit status to ensure you have credits [here](https://platform.openai.com/account/billing/overview).

### Configuration
- Open your `**.env**` file.
- Paste your OpenAI API key next to `**OPENAI_KEY=**`.
- The `**PORT**` environment variable is optional. By default, the application runs on port 3000. If you wish to use a different port, specify it here.

## How to run

1. **Install dependencies**: `npm install`
2. **Start NodeJs server**: `npm start`
