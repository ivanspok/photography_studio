from config import *
from extensions.externalDrives.google_drive_api import GoogleDrive
import re

gd = GoogleDrive('/Photography Studio')

def get_images_for_float_galleries(folder_name, from_google_drive=True):

  images = []
  images_folder = os.path.join(IMAGES_PATH, folder_name)

  if from_google_drive:
    images_links = gd.get_files_from_folder(folder_name)
    images_data = images_links
  else:
    images_data = os.listdir(images_folder)
  
  image_container_number_list = [1, 2, 2]
  for i in range(2, len(images_data)):
    if image_container_number_list[i] == 2 and image_container_number_list[i - 1] == 2:
      value = 1
    elif image_container_number_list[i] == 1 and image_container_number_list[i - 1] == 1:
      value = 2
    
    image_container_number_list.append(value)

  for i, file in enumerate(images_data):
    path = file['link'] if from_google_drive else f'/images/{folder_name}/' + file
    top_image = "topImage" if i<=1 else ''
    image_position = 'left' if (i % 2 == 0) or i == 0 else 'right'
    images.append({
       'path': path,
       'container_number': image_container_number_list[i],
       'topImage': top_image,
       'position': image_position
    })

  return images

def get_images_for_porfolio(folder_name, from_google_drive=True):

  images = []
  images_folder = os.path.join(IMAGES_PATH, folder_name)

  if from_google_drive:
    images_links = gd.get_files_from_folder(folder_name)
    images_data = images_links
  else:
    images_data = os.listdir(images_folder)
  
  for i, file in enumerate(images_data):
    path = file['link'] if from_google_drive else f'/images/{folder_name}/' + file
    top_image = "topImage" if i<=1 else ''
    image_position = 'left' if (i % 2 == 0) or i == 0 else 'right'
    # print(file['title'].split('.')[0])
    images.append({
       'path': path,
       'topImage': top_image,
       'position': image_position,
       'label': file['title'].split('.')[0]
      #  'label': re.sub(r'.', 'er', file['title'])
    })

  return images