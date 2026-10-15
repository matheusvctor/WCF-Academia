import urllib.request
import os
from PIL import Image

files_to_download = {
    'personal_3.png': '1EO3yH8GUnVKqacj9vf9wt0JBU8kTQnl6',
    'personal_4.png': '1meSsulBRiXCTUjqjyJoWzzVi_4sfgUsp',
    'personal_5.png': '1_z27ObNaLNnlvb7PlsfvCo7T5VXmucqE',
    'post_azul_1.png': '1_RHy1XdUhVuG5FiU7Jh8uBmFjOw2-apI',
    'post_azul_2.png': '15ehSb4c7QYPftYsXiT_830n0_UVlvE-l',
    'post_amarelo.png': '1QqPxjo0dho4Oj6rwHsiZTn-wGdyOji8L',
    'pilates_real_1.png': '1PjEgTledhKyljgylX2NXQuSsPe7JNQv3',
    'pilates_real_2.png': '1UiROJbh5T_s4sv0-0nhu96DxtZOiULvL',
    'pilates_real_3.png': '1StLkK-ovXbUdC_KThzDb3AhJ8YO8kpas',
    'pilates_studio_webp.webp': '1WtvjX_iUHalOHdBiL8SVTUeeZhOHV0X6',
    'pilates_photo_19.jpg': '1eI1HJOt6siRMCJ55rXZ21f1gYLM6GYTA',
    'pilates_photo_21.jpg': '1yMNWSQ0s_I3mROoCnawrh2CC44BYkvF-',
}

out_dir = r'C:\Users\zero\.gemini\antigravity\brain\23bf6ac2-e361-489e-9768-9561a429a318\scratch\drive_images'
os.makedirs(out_dir, exist_ok=True)

for name, fid in files_to_download.items():
    dest = os.path.join(out_dir, name)
    if not os.path.exists(dest):
        url = f'https://drive.google.com/uc?export=download&id={fid}'
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
                f.write(resp.read())
            print(f"Downloaded {name} ({os.path.getsize(dest)} bytes)")
        except Exception as e:
            print(f"Failed {name}: {e}")
            continue
    try:
        with Image.open(dest) as img:
            thumb = img.resize((300, int(300 * img.size[1] / img.size[0])))
            thumb.save(os.path.join(out_dir, 'thumb_' + name + '.jpg'))
            print(f"Valid image {name}: {img.size} {img.mode}")
    except Exception as e:
        print(f"Error opening {name}: {e}")
