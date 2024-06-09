from config import *

def get_images_for_float_galleries(folder_name):

  images = []
  images_folder = os.path.join(IMAGES_PATH, folder_name)
  
  image_container_number_list = [1, 2, 2]
  for i in range(2, len(os.listdir(images_folder))):
    if image_container_number_list[i] == 2 and image_container_number_list[i - 1] == 2:
      value = 1
    elif image_container_number_list[i] == 1 and image_container_number_list[i - 1] == 1:
      value = 2
    
    image_container_number_list.append(value)

  for i, file in enumerate(os.listdir(images_folder)):
    top_image = "topImage" if i<=1 else ''
    image_position = 'left' if (i % 2 == 0) or i == 0 else 'right'
    images.append({
       'path': f'/images/{folder_name}/' + file,
       'container_number': image_container_number_list[i],
       'topImage': top_image,
       'position': image_position
    })

  return images

def get_images_for_porfolio(folder_name):

  images = []
  images_folder = os.path.join(IMAGES_PATH, folder_name)
  
  image_container_number_list = [1, 2, 2]
  for i in range(2, len(os.listdir(images_folder))):
    if image_container_number_list[i] == 2 and image_container_number_list[i - 1] == 2:
      value = 1
    elif image_container_number_list[i] == 1 and image_container_number_list[i - 1] == 1:
      value = 2
    
    image_container_number_list.append(value)

  for i, file in enumerate(os.listdir(images_folder)):
    top_image = "topImage" if i<=1 else ''
    image_position = 'left' if (i % 2 == 0) or i == 0 else 'right'
    images.append({
       'path': f'/images/{folder_name}/' + file,
       'container_number': image_container_number_list[i],
       'topImage': top_image,
       'position': image_position,
       'label': "tempLabel Change it!",
    })

  return images