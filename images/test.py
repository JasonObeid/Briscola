import os

for file in os.listdir('./'):
    if file[-9:] == '.png.webp':
        os.rename(file, file[0:-9] + '.webp')
