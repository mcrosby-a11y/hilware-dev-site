import zipfile
import re
import sys

def extract_text(docx_path, output_path):
    try:
        with zipfile.ZipFile(docx_path) as zf:
            xml_content = zf.read('word/document.xml').decode('utf-8')
            # Simple regex to remove tags and get text
            # This is a rough extraction to see the structure
            text = re.sub(r'<w:p>', '\n', xml_content) # Newline for paragraphs
            text = re.sub(r'<[^>]+>', '', text)
            
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(text)
        print("Extraction successful")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_text('agents.docx', 'raw_text.txt')
