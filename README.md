# Test API

A Node and Express backend API for managing student records with MongoDB.

## What this project does

- Connects to MongoDB using Mongoose
- Defines a `Student` model with `name`, `age`, and `grade`
- Lets you add, retrieve, update, and delete students via HTTP routes
- Keeps the route logic separated in `routes/students.js`

## Project structure

- `app.js` - main server setup and route registration
- `config/db.js` - MongoDB connection setup
- `models/Student.js` - Mongoose schema and model
- `routes/students.js` - API route handlers
- `.env` - environment variables (not committed to Git)
- `.gitignore` - ignores `node_modules/` and `.env`

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the project root with:
   ```env
   env should match your own environmental needs/requirements
   ```

3. Start the app:
   ```bash
   npm run dev
   ```

## API endpoints

- `POST /stu` - Add a new student
  - Body example:
    ```json
    {
      "name": "Alice",
      "age": 18,
      "grade": "A"
    }
    ```

- `GET /stuget` - Get all students
- `GET /stuget/:name` - Get one student by name
- `PATCH /stuput/:name` - Update a student's age/grade by name
- `DELETE /studel/:name` - Delete a student by name

## Notes for beginners

- Keep `.env` secret and never push it to GitHub
- `node_modules/` is not pushed by Git because it can be reinstalled
- `git add .` stages changes, and `git commit -m "message"` saves them locally
- Use `git push origin <branch-name>` to send commits to a remote repo

## Helpful commands

```bash
npm install
npm run dev
git status
git commit -m "Your message"
git push origin main
```

Have fun building and testing and follow me on this journey @chuuuqs :)