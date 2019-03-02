import os

music_list = os.listdir(os.path.dirname(__file__))
# print(music_list)

for music in music_list:
    if music.endswith('.mp3'):
        music_title = music[:music.rfind('.')]

        # print(music_title)
        # print(music)
        sql = 'insert into myweb_music(title,thesrc) value ("%s","%s")'%(music_title,music)
        print(sql)
