document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const agentId = params.get('id');

    // Check for file protocol
    if (window.location.protocol === 'file:') {
        const warning = document.createElement('div');
        warning.style.cssText = 'background: #ff4444; color: white; padding: 20px; text-align: center; position: fixed; top: 0; left: 0; right: 0; z-index: 9999;';
        warning.innerHTML = '<strong>WARNING:</strong> You are viewing this file directly. To save changes, you must run the server.<br>Run <code>python server.py</code> in your terminal and visit <a href="http://localhost:8000" style="color: white; text-decoration: underline;">http://localhost:8000</a>.';
        document.body.prepend(warning);
    }

    if (!agentId) {
        alert('No agent ID specified.');
        window.location.href = '../index.html';
        return;
    }

    const form = document.getElementById('agent-form');
    const nameDisplay = document.getElementById('agent-name-display');
    const idDisplay = document.getElementById('agent-id-display');
    const domainInput = document.getElementById('domain');
    const purposeInput = document.getElementById('purpose');
    const promptInput = document.getElementById('prompt');
    const statusInput = document.getElementById('status');

    // Load data
    fetch('../data/agents.json')
        .then(response => response.json())
        .then(agents => {
            const agent = agents.find(a => a.id === agentId);
            if (!agent) {
                alert('Agent not found.');
                window.location.href = '../index.html';
                return;
            }

            // Populate fields
            nameDisplay.textContent = agent.name;
            idDisplay.textContent = agent.id;
            domainInput.value = agent.domain;
            purposeInput.value = agent.purpose || '';
            promptInput.value = agent.prompt || '';
            statusInput.value = agent.status;

            document.title = `${agent.name} (${agent.id}) - SAGE`;
        })
        .catch(error => {
            console.error('Error loading data:', error);
            alert('Error loading data. Make sure server.py is running.');
        });

    // Handle Save
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const updatedData = {
            id: agentId,
            purpose: purposeInput.value,
            prompt: promptInput.value,
            status: statusInput.value
        };

        fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Changes saved successfully!');
                    // Optional: redirect back
                    // window.location.href = 'index.html';
                } else {
                    alert('Error saving changes.');
                }
            })
            .catch(error => {
                console.error('Error saving:', error);
                alert(`Error saving changes: ${error.message}\n\nMake sure server.py is running and you are accessing via http://localhost:8000`);
            });
    });
});
