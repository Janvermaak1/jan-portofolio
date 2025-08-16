import os
from PIL import Image
import csscompressor
import rjsmin

# === CONFIG ===
IMAGE_DIR = "assets/images"
CSS_DIR = "assets/css"
JS_DIR = "assets/js"
HTML_FILES = ["index.html", "about.html"]  # Add more if needed

# === IMAGE COMPRESSION ===
def compress_images():
    for filename in os.listdir(IMAGE_DIR):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            path = os.path.join(IMAGE_DIR, filename)
            img = Image.open(path)
            img.save(path, optimize=True, quality=85)
            print(f"Compressed: {filename}")

# === CSS MINIFICATION ===
def minify_css():
    for filename in os.listdir(CSS_DIR):
        if filename.endswith(".css") and not filename.endswith(".min.css"):
            path = os.path.join(CSS_DIR, filename)
            with open(path, "r") as f:
                minified = csscompressor.compress(f.read())
            min_path = path.replace(".css", ".min.css")
            with open(min_path, "w") as f:
                f.write(minified)
            print(f"Minified CSS: {filename} → {os.path.basename(min_path)}")

# === JS MINIFICATION ===
def minify_js():
    for filename in os.listdir(JS_DIR):
        if filename.endswith(".js") and not filename.endswith(".min.js"):
            path = os.path.join(JS_DIR, filename)
            with open(path, "r") as f:
                minified = rjsmin.jsmin(f.read())
            min_path = path.replace(".js", ".min.js")
            with open(min_path, "w") as f:
                f.write(minified)
            print(f"Minified JS: {filename} → {os.path.basename(min_path)}")

# === HTML PATCHING ===
def patch_html():
    for file in HTML_FILES:
        with open(file, "r", encoding="utf-8") as f:
            html = f.read()

        # Add loading="lazy" to <img> tags
        html = html.replace("<img ", '<img loading="lazy" ')

        # Add defer to <script> tags
        html = html.replace("<script ", '<script defer ')

        # Replace CSS/JS links with minified versions
        html = html.replace("styles.css", "styles.min.css")
        html = html.replace("main.js", "main.min.js")

        with open(file, "w", encoding="utf-8") as f:
            f.write(html)
        print(f"Updated HTML: {file}")

# === RUN ALL ===
if __name__ == "__main__":
    compress_images()
    minify_css()
    minify_js()
    patch_html()
    print("\n✅ Optimization complete. Re-run Lighthouse to check performance.")