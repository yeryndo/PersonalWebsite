from flask import Flask, render_template
from data import Articles
#creating a route in flask!!
app = Flask(__name__) #create an instance of the flask class
#app.debug = True
# ^ if you don't want to restart server and refresh page for updates
Articles = Articles()

@app.route('/')
def index():
    return render_template('home.html') #renders a template called home.html

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles)

@app.route('/article/<string:id>/') #this is a comment
def article(id):
    return render_template('article.html', id=id)


if __name__ == '__main__': #this means it will be executed
     app.run(debug=True) #actually start the application
