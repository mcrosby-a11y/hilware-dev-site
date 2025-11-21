document.addEventListener('DOMContentLoaded', () => {
    const viewAgentsBtn = document.getElementById('view-agents-btn');
    const agentSection = document.getElementById('agent-section');
    const agentGrid = document.getElementById('agent-grid');

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
        // SAGE_AGENTS is defined in js/data.js
        if (typeof SAGE_AGENTS === 'undefined') {
            console.error('SAGE_AGENTS data not found.');
            agentGrid.innerHTML = '<p>Error loading agent data.</p>';
            return;
        }

        const fragment = document.createDocumentFragment();

        SAGE_AGENTS.forEach(agent => {
            const card = document.createElement('div');
            card.className = 'agent-card';

            card.innerHTML = `
                <div class="agent-header">
                    <span class="agent-id">${agent.id}</span>
                    <span class="agent-domain">${agent.domain}</span>
                </div>
                <h3 class="agent-name">${agent.name}</h3>
                <div class="agent-status">
                    <span class="status-indicator"></span>
                    ${agent.status}
                </div>
            `;

            fragment.appendChild(card);
        });

        agentGrid.appendChild(fragment);
    }
});
