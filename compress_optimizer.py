import os
import gzip
import shutil
import logging
from pathlib import Path

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler()]
)

def compress_file(input_path: Path, output_path: Path) -> None:
    """Compress a single file using gzip."""
    logging.info(f"Compressing: {input_path} → {output_path}")
    with input_path.open('rb') as f_in, gzip.open(output_path, 'wb') as f_out:
        shutil.copyfileobj(f_in, f_out)
    logging.info(f"Compression complete: {output_path}")

def optimize_directory(source_dir: Path, target_dir: Path, extensions: tuple = ('.txt', '.log', '.csv')) -> None:
    """
    Compress eligible files from source_dir into target_dir.
    
    Args:
        source_dir (Path): Directory containing files to compress.
        target_dir (Path): Destination for compressed files.
        extensions (tuple): File extensions to compress.
    """
    if not source_dir.exists():
        logging.error(f"Source directory does not exist: {source_dir}")
        return

    target_dir.mkdir(parents=True, exist_ok=True)
    logging.info(f"Optimizing directory: {source_dir} → {target_dir}")

    for file_path in source_dir.rglob('*'):
        if file_path.is_file() and file_path.suffix in extensions:
            compressed_name = file_path.with_suffix(file_path.suffix + '.gz').name
            output_path = target_dir / compressed_name
            compress_file(file_path, output_path)

    logging.info("Directory optimization complete.")

if __name__ == "__main__":
    # Example usage
    SOURCE = Path("data/raw")
    TARGET = Path("data/compressed")
    EXTENSIONS = ('.txt', '.csv', '.log')

    optimize_directory(SOURCE, TARGET, EXTENSIONS)