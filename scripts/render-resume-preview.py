#!/usr/bin/env python3
"""Regenerate public/resume/* from public/VireshSolanki.pdf.

Run this after replacing the resume PDF so the on-page preview (rendered as
static images, not a PDF embed) stays in sync. Requires poppler-utils
(pdftoppm) and Pillow.

Usage: python3 scripts/render-resume-preview.py
"""
import glob
import os
import shutil
import subprocess
import sys
import tempfile

from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = os.path.join(ROOT, "public", "VireshSolanki.pdf")
OUT_DIR = os.path.join(ROOT, "public", "resume")


def main():
    if not os.path.isfile(PDF):
        sys.exit(f"Resume PDF not found: {PDF}")
    if shutil.which("pdftoppm") is None:
        sys.exit("pdftoppm not found. Install poppler-utils (e.g. apt install poppler-utils).")

    os.makedirs(OUT_DIR, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp:
        prefix = os.path.join(tmp, "page")
        subprocess.run(["pdftoppm", "-r", "150", "-png", PDF, prefix], check=True)

        pages = sorted(glob.glob(f"{prefix}-*.png"))
        if not pages:
            sys.exit("pdftoppm produced no pages.")

        for old in glob.glob(os.path.join(OUT_DIR, "page-*.webp")):
            os.remove(old)

        for i, src in enumerate(pages, start=1):
            im = Image.open(src).convert("RGB")
            im.save(os.path.join(OUT_DIR, f"page-{i}.webp"), "WEBP", quality=82, method=6)

        thumb = Image.open(pages[0]).convert("RGB")
        thumb.thumbnail((760, 760 * thumb.height // thumb.width), Image.LANCZOS)
        thumb.save(os.path.join(OUT_DIR, "thumb.webp"), "WEBP", quality=84, method=6)

    print(f"Wrote {len(pages)} page(s) + thumb.webp to {OUT_DIR}")


if __name__ == "__main__":
    main()
