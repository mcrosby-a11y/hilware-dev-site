import re
import json
import os

def parse_agents(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        text = f.read()

    agents = []
    current_domain = "Unknown"
    
    # We will iterate through the text finding both domains and agents in order.
    # Combined pattern to find either a Domain header or an Agent header.
    # Domain: "1. PLANNING DOMAIN" (with optional emoji and whitespace)
    # Agent: "1. Project Charter Writer Agent (A01)"
    
    # Regex explanation:
    # Group 1 (Domain): matches "1. PLANNING DOMAIN"
    # Group 2 (Agent Name): matches "Project Charter Writer Agent"
    # Group 3 (Agent ID): matches "A01"
    
    # Note: The text might be "🔵 1. PLANNING DOMAIN1. Project Charter..."
    # We need to be careful.
    
    # Let's try a different approach: split the text into chunks or just scan linearly.
    # Since we know the structure is hierarchical (Domain -> Agents), we can scan.
    
    # Find all interesting points
    # Domain pattern: (?:🔵\s*)?(\d+\.\s+[A-Z\s&]+DOMAIN)
    # Agent pattern: (\d+\.\s+[^(\r\n]+?)\s+\(([A-Z]\d+)\)
    
    # We'll use a tokenizer approach.
    
    # 1. Find all Domains and their positions
    domain_iter = re.finditer(r'(?:🔵|🟢|🟠|🔴|🟤|🟣|🟡)?\s*(\d+\.\s+[A-Z\s&]+DOMAIN)', text)
    domains = []
    for m in domain_iter:
        domains.append({
            "name": m.group(1).strip(),
            "start": m.start(),
            "end": m.end()
        })
        
    # 2. Find all Agents and their positions
    # Agent pattern: look for "N. Name (ID)"
    # We exclude "DOMAIN" to avoid false positives if any, BUT sometimes they are mashed.
    agent_iter = re.finditer(r'(\d+)\.\s+([^(\r\n]+?)\s+\(([A-Z]\d+)\)', text)
    
    all_agents_found = []
    for m in agent_iter:
        raw_name = m.group(2).strip()
        agent_id = m.group(3).strip()
        start_pos = m.start()
        
        # Handle mashed Domain + Agent
        # e.g. "PLANNING DOMAIN1. Project Charter Writer Agent"
        if "DOMAIN" in raw_name:
            # Split on DOMAIN and take the part after it
            parts = raw_name.split("DOMAIN")
            if len(parts) > 1:
                raw_name = parts[-1].strip()
        
        # Handle case where name includes the previous agent's number or domain number
        # e.g. "10. META-PROCESS & ANALYTICS80. Process State Machine Agent"
        # The regex captured "META-PROCESS ... Agent" as the name.
        # We can look for a pattern like "N. Real Name" inside the raw_name
        
        # If raw_name starts with digits and dot, strip them
        # e.g. "1. Project Charter..."
        match_inner_number = re.search(r'^\d+\.\s+(.+)', raw_name)
        if match_inner_number:
            raw_name = match_inner_number.group(1).strip()
            
        # Also handle the case where the domain name is stuck to the number
        # e.g. "ANALYTICS80. Process..."
        # This is tricky. But we know the Agent Name usually doesn't have all caps words followed by a number.
        # Let's just look for the last "N. " pattern if multiple exist?
        # Actually, the regex `(\d+)\.` at the start of `agent_iter` matched the FIRST number.
        # If the text was `10. META-PROCESS & ANALYTICS80. Process State Machine Agent (A81)`
        # The regex matched `10.` as the number.
        # The name captured was `META-PROCESS & ANALYTICS80. Process State Machine Agent`.
        # We want `Process State Machine Agent`.
        # We can look for `\d+\.\s+` inside the name and take what follows.
        
        inner_number_match = re.search(r'\d+\.\s+(.+)', raw_name)
        if inner_number_match:
             raw_name = inner_number_match.group(1).strip()
             
        # Clean up HTML entities
        raw_name = raw_name.replace('&amp;', '&')

        all_agents_found.append({
            "name": raw_name,
            "id": agent_id,
            "start": start_pos
        })
        
    # 3. Assign domains to agents based on position
    # An agent belongs to the domain that started most recently before the agent
    
    for agent in all_agents_found:
        # Find the domain with the largest start position that is <= agent.start
        assigned_domain = "Unknown"
        for d in domains:
            if d['start'] < agent['start']:
                # Clean up domain name: remove "1. " and " DOMAIN"
                # e.g. "1. PLANNING DOMAIN" -> "Planning"
                raw_domain = d['name']
                # Remove leading number and dot
                raw_domain = re.sub(r'^\d+\.\s+', '', raw_domain)
                # Remove trailing DOMAIN
                raw_domain = raw_domain.replace('DOMAIN', '').strip()
                assigned_domain = raw_domain.title()
            else:
                break
        
        agents.append({
            "id": agent['id'],
            "name": agent['name'],
            "domain": assigned_domain,
            "status": "Not Implemented"
        })

    # 4. Renumber agents to ensure continuous IDs (A01 -> A81)
    # Sort by the original ID to ensure we keep the order
    agents.sort(key=lambda x: x['id'])
    
    for i, agent in enumerate(agents):
        # Generate new ID: A01, A02, ... A81
        new_id_num = i + 1
        new_id = f"A{new_id_num:02d}"
        agent['id'] = new_id

    return agents

if __name__ == "__main__":
    if not os.path.exists('js'):
        os.makedirs('js')
        
    agents = parse_agents('raw_text.txt')
    
    # Write to JS file
    js_content = f"const SAGE_AGENTS = {json.dumps(agents, indent=2)};"
    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Extracted {len(agents)} agents.")
