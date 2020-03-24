# DjangoTranslate

If you want to look at the app without cloning the repo you should be able to access it at https://autotranslation.herokuapp.com/

## How to use my app

First create a venv

```python -m venv venv```

Activate your venv

on Windows 

```source venv/Scripts/activate```

on Unix based systems

```source venv/bin/activate```

install python modules

```pip install -r requirements.txt```

you can now launch the dev server

```./manage.py runserver```

At this stage, you can access the app at localhost:8000, feel free to test it.

## Put in production with Heroku

To put in production with heroku follow this steps

1 - first reinitialize the git repo

```
rm -rf .git
git init
git add .
git commit -m "first commit"
```

2 - create an account at https://id.heroku.com/

3 - install heroku cli interface https://devcenter.heroku.com/articles/heroku-cli then in the project run

```heroku login```

once logged in

```
heroku create <chooseaname>
heroku git:remote -a <chooseaname>
git push heroku master
```

When it's done building the app you should be able to access the deployed version at https://chooseaname.herokuapp.com/

Thanks for looking at my project!
