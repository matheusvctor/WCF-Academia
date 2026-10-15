import os
import re
from PIL import Image

print("=== AUDIT OF ALL ASSET FILES IN src/assets ===")
src_assets = "src/assets"
for root, dirs, files in os.walk(src_assets):
    for f in files:
        full_path = os.path.join(root, f)
        rel_path = os.path.relpath(full_path, "src")
        try:
            with Image.open(full_path) as img:
                print(f"ASSET: {rel_path} | Size: {img.size} | Mode: {img.mode} | Format: {img.format} | Bytes: {os.path.getsize(full_path)}")
        except Exception as e:
            print(f"ASSET (non-image or error): {rel_path} | {e}")

print("\n=== AUDIT OF ALL IMPORTS IN src/ ===")
for root, dirs, files in os.walk("src"):
    for f in files:
        if f.endswith((".ts", ".tsx")):
            p = os.path.join(root, f)
            with open(p, "r", encoding="utf-8") as fp:
                for idx, line in enumerate(fp, 1):
                    if "assets/" in line:
                        print(f"{p}:{idx} -> {line.strip()}")
