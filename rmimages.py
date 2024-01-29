import os
import glob

# Change this path to the location of your static/assets folder
assets_folder_path = "build/static/assets/"

notremove = ["97926439955086f8ee4aabbd81580f17.png",
             "3e83d9d800459175308f0b45b117af16.png",
             "97926439955086f8ee4aabbd81580f17.png",
             "3e83d9d800459175308f0b45b117af16.png"]

# Find all .png and .gif files in the assets folder and its subfolders
image_files = glob.glob(os.path.join(assets_folder_path, "**", "*.png"), recursive=True)
image_files += glob.glob(os.path.join(assets_folder_path, "**", "*.gif"), recursive=True)
image_files += glob.glob(os.path.join(assets_folder_path, "**", "*.jpg"), recursive=True)
image_files += glob.glob(os.path.join(assets_folder_path, "**", "*.jpeg"), recursive=True)

# Iterate through the list of image files and remove them except for the ones in the notremove list
for image_file in image_files:
    if image_file not in notremove:
        os.remove(image_file)
        print("Removed: " + image_file)
    else:
        print("Not Removed: " + image_file)

print("Done!")