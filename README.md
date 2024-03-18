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

# Getting Started React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all dependencies from the project.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In React webapp, you'll land on the List Team Members page. And then you can add or edit team-members from there on.
