# Assumptions

1. Python 3.11 is installed on the system.
2. node greater than v18 is available on the system.
3. yarn is installed and globally available.
4. Before running `react`app, `django` app is launched. Django app is lauched on default port `8000` and default IP address of `127.0.0.1`.
5. `react` app is launched on default port of `3000`.

# Starting Python Django

1. This repo contians the code for backend which was developed using Django and SQLLite which is default database for Django.
2. To install dependencies required for this App, you will need Python 3.11 or later installed on your computer. Also, make sure you've **pip** installed.
3. Create a virtual environemnt for the project. For e.g. you can use following commands

```sh
python3.11 -m venv myenv
source myenv/bin/activate
```

4. Once virtual environment is created, run `pip install -r requirements.txt` at repo root level to install python dependencies.
5. After Python dependencies are installed you start the server using following command. I've checked in migrations and sqlite DB file.

```sh
python manage.py runserver
```

6. After server is launched go to [Root API](http://127.0.0.1:8000/api/team-members/). Make sure server starts on **127.0.0.1:8000** this base url is hardcoded in react app.

7. Once Django App is up and running, follow instructios for React App.

# Starting React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies from the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In React webapp, you'll land on the List Team Members page. And then you can add or edit team-members from there on.

# High-level overview of code organization

1. Django app is in `team_management_app` directory. Django App leverages built-in Sqlite DB. Most of the code is created by django-admin package.
2. React App's entry point is App.tsx and it defines 2 routes, root level page and form page. Root page lists all the team-members.
3. Form page, can load in either Add mode or Edit mode. Form state is managed using `react-hook-form` package.
4. For UI components, I have used `chakra-ui` package, it is based on the styled components and allows easy integration of CSS.
5. `api.ts` file contains all the CRUD operations which are required for app to work.

# Future Work

1. Add unit tests to Test `react` and `django` code.
2. Deploy `Django` cloud virtual machine.
3. Deploy `react` app either on `fastly` or using `cloudfront` and `s3` bucket.
