<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center"></h1>
</p>
<p align="center">
    <em>Style & Estimate, Seamlessly Connect!</em>
</p>
<p align="center">
	<!-- local repository, no metadata badges. -->
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Chart.js-FF6384.svg?style=default&logo=chartdotjs&logoColor=white" alt="Chart.js">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=default&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=default&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=default&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=default&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=default&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=default&logo=JSON&logoColor=white" alt="JSON">
</p>

<br><!-- TABLE OF CONTENTS -->
This is a FrontEnd for [Point Estimation Server](https://github.com/Tonkungs/point-estimation-server)

<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

## Overview

MyNextChat is an open-source Next.js application (v0.1.0) empowering real-time communication between users through WebSockets. It offers a responsive, customizable interface leveraging TypeScript, React v18, and chart.js. The project enriches the user experience with a seamless integration of DaisyUI plugin and Tailwind CSS for styling consistency across components and layouts. Key features include dynamic data exchange via Context API, user-friendly local storage management, unique 14-character user ID generation, and a flexible point estimation system for collaborative workspace functionality. This robust solution fosters engaging, secure interactions while ensuring scalability and adaptability.

---

## Features

---

## Repository Structure

```sh
└── /
    ├── README.md
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── room
    ├── constants
    │   └── point.ts
    ├── context
    │   ├── MyContext.tsx
    │   └── ws.tsx
    ├── hook
    │   └── localstorage.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── next.svg
    │   └── vercel.svg
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── utils
        └── utils.ts
```

---

## Modules

<details closed><summary>.</summary>

| File                                     | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tailwind.config.ts](tailwind.config.ts) | Customizes tailwind CSS theme, expanding container dimensions, introducing new custom colors, and integrates DaisyUI plugin. Enriches the projects visual appeal, enhancing components across app and pages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [package.json](package.json)             | This package configures the point-estimation project (v0.1.0), enabling development, building, starting, and linting using Next.js and React v18, along with chart.js library and TypeScript for typings. DevDependencies include eslint, postcss, tailwindcss, and daisyui for styling consistency. The repository structure encompasses a range of components and utilities for a responsive user interface.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [next.config.mjs](next.config.mjs)       | In this open-source project, a Next.js configuration file (next.config.mjs) is utilized to fine-tune its behavior. Specifically, the configuration disables the stricter React mode, offering more flexibility while building the user interface, ensuring a smoother development experience.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [tsconfig.json](tsconfig.json)           | Configures TypeScript options for a Next.js project, optimizing its functionality and compatibility across various modules. This setup ensures strict type checking, supports ESNext syntax, and leverages Next.js-specific plugins to streamline the development process.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [package-lock.json](package-lock.json)   | Enhanced Real-Time Chat Interface for Next.js Application (MyNextChat)This code file, located within the room folder of our repository (MyNextChat), represents an integral part of the application's real-time chat functionality. Its primary purpose is to facilitate dynamic and engaging user interaction by handling the communication between clients using WebSockets.The critical feature of this file is that it implements the `room` component, which acts as a container for our chat interface within the broader app structure defined by layout.tsx. When users participate in chats, this room component enables real-time exchanges through an integration with the `ws.tsx` WebSocket context file, making sure every message sent is delivered instantaneously to all connected clients.Additionally, it interacts with other utility files, such as the `constants/point.ts` that stores application constants (e.g., message formats), and `hook/localstorage.ts` for persisting user-specific data in their browsers using LocalStorage. These connections reinforce the cohesiveness of our project's architecture, ensuring consistent user experience across all pages.Lastly, it should be noted that this file contributes to the overall responsive design of MyNextChat by importing global styling from globals.css'. By working in harmony with other elements within our repository structure, this code file ensures the success and usability of the real-time chat feature for end-users. |
| [postcss.config.mjs](postcss.config.mjs) | Configure PostCSS to seamlessly utilize Tailwind CSS within the repositorys stylesheet architecture, ensuring coherent design across various components and layouts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

</details>

<details closed><summary>hook</summary>

| File                                    | Summary                                                                                                                                                                                                                                                                                                                      |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [localstorage.ts](hook/localstorage.ts) | Manage local storage interaction seamlessly across your client-side React application with our `useLocalStorage` hook. This utility allows you to save and retrieve data from the browsers storage by associating keys to values. The initial value can be customized, ensuring flexibility when setting up your apps state. |

</details>

<details closed><summary>utils</summary>

| File                       | Summary                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [utils.ts](utils/utils.ts) | Within the project architecture, the `Utils` class in the `utils/utils.ts` file is responsible for generating unique 14-character user IDs, contributing to seamless and secure user identification within the application. This essential functionality is provided on demand across various components, ensuring every user has a distinct identifier. |

</details>

<details closed><summary>context</summary>

| File                                   | Summary                                                                                                                                                                                                                                                                                                               |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ws.tsx](context/ws.tsx)               | The ws.tsx context file enables dynamic communication with a server, managing session information and web sockets across components via the provided RoomContext and useRoomContext hooks, seamlessly integrating the feature within the applications architecture.                                                   |
| [MyContext.tsx](context/MyContext.tsx) | Manages a global application context for storing app state, room details, and WebSocket connection status. It sets up an easily accessible context provider and custom hook to simplify state management across the application while maintaining a persistent connection with a designated server through WebSocket. |

</details>

<details closed><summary>constants</summary>

| File                           | Summary                                                                                                                                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [point.ts](constants/point.ts) | In the architecture of this project, `point.ts` file defines a predefined list of estimation values for user interaction within the application, ensuring consistency and accuracy throughout the platform. |

</details>

<details closed><summary>app</summary>

| File                           | Summary                                                                                                                                                                                                                                                                                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [layout.tsx](app/layout.tsx)   | Creates a universal layout for the entire application, wrapping each component within the provided `MyContext`. Ensures consistency across pages and facilitates interaction between components and server-side features through Context API integration.                                        |
| [page.tsx](app/page.tsx)       | Manages user login by gathering Room ID and User Name for WebSocket-enabled point estimation system. Uses custom hook for local storage, imported utilities, and Reacts router for navigation within the app, leveraging MyContext and ws context providers for real-time data exchange.         |
| [globals.css](app/globals.css) | This `app/globals.css` file extends Tailwind CSS base, components, and utilities for consistent design, and defines custom classes (e.g.,.bg-cus-cream,.button-mint,.border-lime-cus) to style the application with specific colors and effects, ensuring a coherent user experience throughout. |

</details>

<details closed><summary>app.room</summary>

| File                              | Summary                                                                                                                                                                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [layout.tsx](app/room/layout.tsx) | This `RoomLayout` component within the repository structures Next.js project. Features customizable header including user sign-off functionality, and a navigable interface with a tooltip. Integrates with routing system and other UI components for an engaging user experience. |

</details>

<details closed><summary>app.room.[id]</summary>

| File                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [interface.tsx](app/room/[id]/interface.tsx) | In this TypeScript interface file, critical data models for room members and estimations are defined within the `app/room` directory, expanding the applications collaborative workspace features. The interfaces enable dynamic data exchange between components, fostering seamless interactions in real-time rooms. Moreover, default data structures for room management and WebSocket communication actions are set, allowing new users to effortlessly join established rooms. |
| [page.tsx](app/room/[id]/page.tsx)           | Creates a room interface displaying an estimation points for users to select their point and display the estimated values using BarChart.It allows users to join, leave, edit, and delete their estimates as well as showing or hiding their selected points on the chart.It also provides a user table with member names and their selected point along with deletion and showing/hiding options for their selections.                                                              |

</details>

<details closed><summary>app.room.[id].components</summary>

| File                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [bar-chart.tsx](app/room/[id]/components/bar-chart.tsx)   | Visualizes bar chart data for estimation points using React-ChartJS-2 within the room applications architecture. Receives customizable Point and PointMax props to render a dynamic and scalable chart with the provided values, enhancing data analysis and interpretation.                                                                                                         |
| [card-point.tsx](app/room/[id]/components/card-point.tsx) | The provided `CardPoint.tsx` component in this repository contributes to the visual interaction within the application by rendering a card representing a point for user selection. It dynamically styles each point based on its current usage (`useCard`) and inclusion within estimation points arrays, ensuring seamless user navigation through the points selection interface. |
| [sign-off.tsx](app/room/[id]/components/sign-off.tsx)     | This file **exports** an SVG icon `SignOff`, used for user sign-off functionality within the application. It is part of the room component hierarchy, contributing to the intuitive and visually engaging interface provided by our Next.js project.                                                                                                                                 |

</details>

---

## Getting Started

**System Requirements:**

- **TypeScript**: `version x.y.z`

### Installation

<h4>From <code>source</code></h4>

> 1. Clone the repository:
>
> ```console
> $ git clone ../
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```
>
> 4. Start:
>
> ```console
> $ npm start
> ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Usage

<h4>From <code>source</code></h4>

> Run using the command below:
>
> ```console
> $ npm run build && node dist/main.js
> ```

### Tests

> Run the test suite using the command below:
>
> ```console
> $ npm test
> ```

---

## Project Roadmap

- [x] `► Login To Room For Estimation`
- [ ] `► Create Room`
- [ ] `► ...`

---

## Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://local//issues)**: Submit bugs found or log feature requests for the `` project.
- **[Submit Pull Requests](https://local//blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://local//discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your local account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone ../
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to local**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://local{//}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=">
   </a>
</p>
</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
