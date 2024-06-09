import os
# GLOBAl PATHs
global APP_PATH, STATIC_PATH, IMAGES_PATH

APP_PATH = os.path.dirname(os.path.realpath(__file__))
STATIC_PATH = os.path.join(APP_PATH, 'static')
IMAGES_PATH = os.path.join(STATIC_PATH, 'images')
