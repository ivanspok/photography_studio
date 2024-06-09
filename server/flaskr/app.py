from flask import Flask, render_template
import os
from functions import get_images_for_float_galleries, get_images_for_porfolio


app = Flask(__file__)

@app.route('/')
@app.route('/index')
def index():
  return render_template('index.html')

@app.route('/portfolio')
def portfolio():
  images = get_images_for_porfolio("taisa")
  return render_template('portfolio.html', images=images)

@app.route('/family')
def family():
  return render_template('family.html')

@app.route('/maternity')
def maternity():
  return render_template('maternity.html')

@app.route('/commercial')
def commercial():
  return render_template('commercial.html')

@app.route('/services')
def services():
  return render_template('services.html')

@app.route('/about')
def about():
  return render_template('about.html')

@app.route('/clients_albums')
def clients_albums():
  return render_template('clients_albums.html')

@app.route('/contacts')
def contacts():
  return render_template('contacts.html')

@app.route('/log_ig')
def log_in():
  return render_template('log_in.html')

@app.route("/portraits")
def portraits():
  
  images = get_images_for_float_galleries("Taisa")

  return render_template('portraits.html', images=images)

if __name__ == "__main__":
  app.run(debug=True)