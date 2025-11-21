import json

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    # remove "const SAGE_AGENTS = " and ";"
    content = content.replace('const SAGE_AGENTS = ', '').replace(';', '')
    agents = json.loads(content)

ids = [int(a['id'][1:]) for a in agents]
ids.sort()

missing = []
for i in range(1, 83):
    if i not in ids:
        missing.append(f"A{i:02d}")

print(f"Missing IDs: {missing}")
