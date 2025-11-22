document.addEventListener('DOMContentLoaded', () => {
    const viewAgentsBtn = document.getElementById('view-agents-btn');
    const agentSection = document.getElementById('agent-section');
    const agentGrid = document.getElementById('agent-grid');

    // Check for file protocol
    if (window.location.protocol === 'file:') {
        const warning = document.createElement('div');
        warning.style.cssText = 'background: #ff4444; color: white; padding: 20px; text-align: center; position: fixed; top: 0; left: 0; right: 0; z-index: 9999;';
        warning.innerHTML = '<strong>WARNING:</strong> You are viewing this file directly. Functionality will be limited.<br>Run <code>python server.py</code> in your terminal and visit <a href="http://localhost:8000" style="color: white; text-decoration: underline;">http://localhost:8000</a>.';
        document.body.prepend(warning);
    }

    viewAgentsBtn.addEventListener('click', () => {
        // Reveal the section
        agentSection.classList.remove('hidden');

        // Scroll to the section
        agentSection.scrollIntoView({ behavior: 'smooth' });

        // Render agents if not already rendered
        if (agentGrid.children.length === 0) {
            renderAgents();
        }
    });

    function renderAgents() {
        fetch('data/agents.json')
            .then(response => response.json())
            .then(agents => {
                // Group agents by domain
                const agentsByDomain = {};
                agents.forEach(agent => {
                    if (!agentsByDomain[agent.domain]) {
                        agentsByDomain[agent.domain] = [];
                    }
                    agentsByDomain[agent.domain].push(agent);
                });

                // Clear grid
                agentGrid.innerHTML = '';

                // Render by domain
                // Define a specific order if desired, otherwise use object keys (which might be insertion order)
                // We'll stick to the order they appear in the JSON (which is roughly the order in the doc)
                // But since we're iterating keys, let's rely on the extraction order which was sequential.
                // To be safe, we can iterate the domains from the list of agents to maintain order.

                const domains = [];
                agents.forEach(agent => {
                    if (!domains.includes(agent.domain)) {
                        domains.push(agent.domain);
                    }
                });

                domains.forEach(domain => {
                    // Create domain header
                    const domainHeader = document.createElement('h2');
                    domainHeader.className = 'domain-header';
                    domainHeader.textContent = domain;
                    agentGrid.appendChild(domainHeader);

                    // Create grid for this domain
                    const domainGrid = document.createElement('div');
                    domainGrid.className = 'domain-grid';

                    agentsByDomain[domain].forEach(agent => {
                        const card = document.createElement('div');
                        card.className = 'agent-card';
                        // Make card clickable for Phase 2
                        card.onclick = () => window.location.href = `agent/?id=${agent.id}`;
                        card.style.cursor = 'pointer';

                        card.innerHTML = `
                            <div class="agent-header">
                                <span class="agent-id">${agent.id}</span>
                                <span class="agent-domain">${agent.domain}</span>
                            </div>
                            <h3 class="agent-name">${agent.name}</h3>
                            <div class="agent-status">
                                <span class="status-indicator" data-status="${agent.status}"></span>
                                ${agent.status}
                            </div>
                        `;
                        domainGrid.appendChild(card);
                    });

                    agentGrid.appendChild(domainGrid);
                });
            })
            .catch(error => {
                console.error('Error loading agent data:', error);
                agentGrid.innerHTML = '<p>Error loading agent data. Please ensure you are running this on a local server (e.g., python -m http.server).</p>';
            });
    }
});
