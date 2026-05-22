# ANSWERS

## 1. How to run
Deployed URL:
https://devfellowship-ngfwbcenz-ankitatiwary33-gmailcoms-projects.vercel.app/
 
OR


Clone the repository:

```bash
git clone https://github.com/Ankitatiwary21/devfellowship.git
```

Go to the project folder:

```bash
cd habit-tracker
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

## 2. Stack & design choices

I chose React with Vite because it allows fast component-based frontend development and clean state management for interactive UI features like habit tracking and week navigation. Tailwind CSS helped me iterate quickly on responsive layouts and visual hierarchy without writing large custom CSS files.

One visual decision I made was highlighting today’s column using a subtle blue tint instead of a bright color. This helps users quickly orient themselves in the weekly grid without creating too much visual noise.

Another interaction decision was keeping the grid horizontally scrollable on smaller screens instead of shrinking the cells too much. This preserves touch-friendly tap targets and improves usability on mobile devices.

I chose Monday as the start of the week because it creates a cleaner workweek-oriented tracking structure and aligns well with many productivity tools.

For streak logic, I counted consecutive completions up to today. If today is unchecked, the streak resets to zero because I wanted the streak to reflect the user's current active momentum.

## 3. Responsive & accessibility

On a 360px mobile screen, the layout stacks the add-habit controls vertically and allows horizontal scrolling for the weekly grid to maintain usable tap sizes.

On larger screens like 1440px laptops, the layout expands naturally with improved spacing and a more balanced visual hierarchy.

For accessibility, I ensured that buttons remain clearly visible with sufficient contrast and used semantic button elements for all interactive controls.

One accessibility improvement I did not fully implement was advanced keyboard navigation between grid cells. With more time, I would improve keyboard traversal and add more screen-reader-specific labels.

## 4. AI usage

I used ChatGPT to help structure the React component architecture, brainstorm responsive layout improvements, and debug some JSX and Tailwind issues during development.

One specific change I made to AI-generated output was reducing the grid spacing and cell sizes after noticing that the original layout caused unnecessary horizontal scrolling on desktop screens. I adjusted the spacing using responsive Tailwind classes to improve layout balance while still preserving mobile usability.

## 5. Honest gap

One part of the submission that could be improved further is the interaction polish. With another day, I would improve animations and transitions for toggling habit completions, add smoother hover/focus states, and build a more refined inline rename experience instead of using the browser prompt dialog.