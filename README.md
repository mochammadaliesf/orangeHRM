# OrangeHRM Playwright E2E Automation

## Project Overview
This project provides robust, maintainable end-to-end (E2E) tests for the OrangeHRM demo site using Playwright. It follows best practices for modular test organization, semantic selectors, and the Page Object Model (POM) pattern. Test steps are structured for clarity and reporting using Playwright's `test.step` API.

### Tech Stack
- **Playwright**
- **TypeScript**
- **Node.js**
- **MCP Server/Playwright Codegen**

## Features & Methodology
- **Modular Structure**: Tests are organized by feature (Admin, PIM, Leave) in dedicated directories.
- **Page Object Model (POM)**: All selectors and page interactions are encapsulated in POM classes for maintainability.
- **Semantic Selectors**: Uses Playwright's `getByRole`, `getByText`, etc., for robust element targeting.
- **Centralized Navigation**: All URLs are consolidated and managed in `test/pages/navigation.ts` for consistency.
- **Step-wise Test Reporting**: Each major test action is wrapped in `test.step` for clear reporting and debugging.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mochammadaliesf/orangeHRM.git
cd orangeHRM
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Playwright Tests
```bash
npx playwright test
```

### 4. View Test Reports
After running tests, open the HTML report:
```bash
npx playwright show-report
```

## Project Structure
```
orangeHRM/
├── test/
│   ├── admin-tests/
│   ├── pim-tests/
│   ├── leave-tests/
│   ├── pages/
│   │   ├── AdminPage.ts
│   │   ├── PIMPage.ts
│   │   ├── LeavePage.ts
│   │   ├── LoginPage.ts
│   │   └── navigation.ts
│   └── fixtures.ts
├── playwright.config.ts
├── package.json
├── README.md
└── ...
```

## How Tests Work
- Each test file uses Playwright's `test` and `expect` APIs.
- Test steps are wrapped in `test.step` for reporting.
- Employee creation, search, update, and delete are performed using POM methods and semantic selectors.
- Navigation is handled via centralized URLs.
- (Optional) API calls can be used for setup if OrangeHRM exposes endpoints.