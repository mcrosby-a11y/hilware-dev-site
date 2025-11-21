const SAGE_AGENTS = [
  {
    "id": "A01",
    "name": "Project Charter Writer Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A02",
    "name": "Roadmap Builder Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A03",
    "name": "Success Metrics Drafting Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A04",
    "name": "Risk Register Initializer Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A05",
    "name": "Risk Identification Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A06",
    "name": "Risk Categorization Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A07",
    "name": "Effort Estimation Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A08",
    "name": "Constraint Block Extractor Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A09",
    "name": "Sprint Objective Condenser Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A10",
    "name": "Sprint Charter Writer Agent",
    "domain": "Planning",
    "status": "Not Implemented"
  },
  {
    "id": "A11",
    "name": "Requirement Extractor Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A12",
    "name": "Requirement Normalizer Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A13",
    "name": "User Story Writer Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A14",
    "name": "Acceptance Criteria Generator Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A15",
    "name": "SRS Writer Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A16",
    "name": "Requirements Traceability Matrix Generator Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A17",
    "name": "Stakeholder Interview Summarizer Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A18",
    "name": "Non-Functional Requirements Collector Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A19",
    "name": "Requirements Gap Checker Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A20",
    "name": "Requirements \u2192 Test Linker Agent",
    "domain": "Requirements",
    "status": "Not Implemented"
  },
  {
    "id": "A21",
    "name": "Architecture Options Generator Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A22",
    "name": "Architecture Tradeoff Analyzer Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A23",
    "name": "ADR Writer Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A24",
    "name": "C4 Diagrammer Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A25",
    "name": "Sequence Diagram Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A26",
    "name": "Data Modeling Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A27",
    "name": "Schema Definition Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A28",
    "name": "API Spec Writer Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A29",
    "name": "Integration Topology Planner Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A30",
    "name": "Threat Model STRIDE Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A31",
    "name": "UI Wireframe Generator Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A32",
    "name": "Interface Contract Validator Agent",
    "domain": "Design",
    "status": "Not Implemented"
  },
  {
    "id": "A33",
    "name": "Code Scaffold Generator Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A34",
    "name": "Boilerplate Generator Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A35",
    "name": "Feature Code Writer Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A36",
    "name": "Refactoring Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A37",
    "name": "Documentation Comment Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A38",
    "name": "Pattern Enforcement Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A39",
    "name": "Test Stub Inserter Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A40",
    "name": "PR Reviewer Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A41",
    "name": "Static Analysis Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A42",
    "name": "Code Risk Detector Agent",
    "domain": "Implementation",
    "status": "Not Implemented"
  },
  {
    "id": "A43",
    "name": "Unit Test Generator Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A44",
    "name": "Integration Test Generator Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A45",
    "name": "API Contract Testing Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A46",
    "name": "Fuzz Testing Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A47",
    "name": "Performance Load Test Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A48",
    "name": "Stress Test Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A49",
    "name": "Security SAST Scan Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A50",
    "name": "DAST Vulnerability Scan Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A51",
    "name": "Dependency Vulnerability Scanner Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A52",
    "name": "Code Coverage Analyzer Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A53",
    "name": "Test Report Writer Agent",
    "domain": "Testing",
    "status": "Not Implemented"
  },
  {
    "id": "A54",
    "name": "Infrastructure-as-Code Generator Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A55",
    "name": "Environment Config Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A56",
    "name": "CI Pipeline Builder Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A57",
    "name": "CD Deployment Script Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A58",
    "name": "Release Notes Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A59",
    "name": "Rollback Plan Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A60",
    "name": "Pre-Production Validator Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A61",
    "name": "Chaos Testing Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A62",
    "name": "Log Triage Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A63",
    "name": "Metrics Anomaly Detector Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A64",
    "name": "Incident Ticket Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A65",
    "name": "Root Cause Analysis Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A66",
    "name": "Hotfix Branch Creator Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A67",
    "name": "Patch Preparation Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A68",
    "name": "Backport Planner Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A69",
    "name": "License Compliance Checker Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A70",
    "name": "PII Sentinel Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A71",
    "name": "Audit Trail Verifier Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A72",
    "name": "Ethical Risk Detector Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A73",
    "name": "Security Policy Compliance Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A74",
    "name": "README Generator Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A75",
    "name": "API Documentation Generator Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A76",
    "name": "Changelog Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A77",
    "name": "Architecture Overview Writer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A78",
    "name": "Meeting Note Summarizer Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A79",
    "name": "Formatting Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A80",
    "name": "Process State Machine Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  },
  {
    "id": "A81",
    "name": "Analytics Metrics Agent",
    "domain": "Deployment",
    "status": "Not Implemented"
  }
];