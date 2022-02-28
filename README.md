# Week 1 – Tic Tac Toe

Thicker than a bowl of oatmeal.

## Getting Started

Make a copy of this template on you or your partner's personal GitHub account. Please do not clutter the `web-at-berkeley` organization.

You should now have a personal copy of this starter code. Clone the repo so you have it locally, then make a new branch using

```sh
git checkout -b development
```

Install packages:

```sh
yarn
```

Finally:

```sh
yarn start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If you're using VSCode, it's recommended to go into settings and set `eslint.codeActionsOnSave.mode` to `all` and `editor.formatOnSave` to `true`.

---

## Phases

- **Phase 1 (recommended Saturday)** – Developing a model/outline of how the UI will be structured (component hierarchies, deciding how to use state + props, etc.). **Write in a .txt file and submit for review.**
- **Phase 2** **(rec. Monday)** – Adding all the components and finishing the hierarchies (Components don't have to be filled out completely, we just want you to get the hierarchies down first)
- **Phase 3** **(rec. Wednesday)** – Adding in data logic and persistence logic :))

## **Requirements**

Your final product should look like this: [link to Figma](https://www.figma.com/file/BX1RYUilFGySN1A81M32e3/Designs?node-id=0%3A1)

**Technical Requirements**

- React - Create React App
- Chakra UI instead of plain HTML
  - [Chakra Text](https://chakra-ui.com/docs/typography/text) instead of `<p>`
  - [Chakra Button](https://chakra-ui.com/docs/form/button) instead of `<button>`
  - etc.
- Typescript ([refresher here](https://www.youtube.com/watch?v=ahCwqrYpIuM&ab_channel=Fireship))

**Functional Requirements**

- Must be a 2 player game
- Game board must be made of cards - each card is either an X or an O or not filled in yet
- Keep track of # of wins or loses
- Persisted across refreshes
- After each win or loss, have a button to reset

## Submission

**Add** your team information to [this spreadsheet](https://docs.google.com/spreadsheets/d/1dXsNPQxYvZUX6gAXzCfX8q1HVj6jUGKO1bn1RNyhZsI/edit?usp=sharing)

For each phase, **create** a PR from development to `main`

**Send** the link to `#bootcamp-devs-checkoffs` on Slack for review
