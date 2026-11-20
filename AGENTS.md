```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the development of robust, maintainable, and efficient AI coding agents within this repository. Adherence to these principles is crucial for a successful project.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent should have a single, well-defined purpose. Avoid creating multiple agents with overlapping functionality.
*   **Reusable Components:** Design components (e.g., data processing, communication protocols) to be reusable across multiple agents.
*   **Abstraction:**  Use abstract classes and interfaces to represent common behaviors, reducing code duplication.
*   **Consistent Naming:**  Maintain a consistent naming convention for agents, functions, and data structures.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimize Complexity:**  Strive for the simplest solution that meets the requirements. Avoid over-engineering.
*   **Clear Code:** Write code that is easily understandable and documented.
*   **Readability:** Prioritize code readability through consistent formatting and appropriate variable names.
*   **Focus on Core Logic:** Ensure each agent’s core logic is easily traceable and testable.

## 3. SOLID Principles

*   **Single Responsibility Principle:** (As mentioned above) Each class/agent has one and only one reason to change.
*   **Open/Closed Principle:**  The agent's design should be open for extension but closed for modification. This is crucial for maintaining existing code without directly altering it.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to depend on methods they do not use.
*   **Dependency Inversion Principle:** Higher-level modules should not depend on implementation details.  Instead, they should depend on abstractions.

## 4. YAGNI (You Aren't Gonna Need It)

*   **Avoid Unnecessary Features:**  Only implement features that are currently needed and are essential for the agent's purpose.
*   **Future-Proofing:**  Design for potential future requirements and avoid premature optimization.

## 5. Development Practices

*   **Test-Driven Development (TDD):** Write tests *before* writing the code. The tests should cover all essential cases.
*   **Unit Testing:** Comprehensive unit tests should be written for each agent and function.
*   **Integration Testing:** Ensure agents and their components work together correctly.
*   **Code Reviews:** All code changes must undergo rigorous code reviews before merging.
*   **Documentation:** Provide clear and concise documentation for each agent, including input/output specifications, error handling, and usage guidelines.
*   **Maintainability:**  The codebase should be designed to be easily maintained and extended.

## 6. Code Length & Structure

*   **Maximum Code Length:** 180 lines of code (excluding comments and docstrings).
*   **File Organization:**  Organize files logically using clear directory structure. Use meaningful file names.
*   **Comments:**  Use comments sparingly and only to explain complex logic or non-obvious decisions. Aim for self-documenting code whenever possible.
*   **Data Structures:**  Choose appropriate data structures for each agent to optimize performance and maintainability.
*   **Error Handling:** Implement robust error handling to prevent crashes and provide informative error messages.

## 7. Mocking & Test Emphasis

*   **Only Mock for Testing:** All mocks and fake implementations *must* be used *only* for test execution.  No real implementation is required.
*   **Focus on Isolation:** Mocks should isolate agents from each other to prevent unintended side effects during testing.
*   **Realistic Mock Data:** Mock data should be realistic but controlled to avoid exposing sensitive information.
*   **Test Coverage:**  Aim for a minimum of 80% test coverage.

## 8.  General Considerations

*   **Version Control:** Use a version control system (e.g., Git) to track code changes.
*   **Continuous Integration/Continuous Deployment (CI/CD):**  Implement a CI/CD pipeline to automate testing and deployment.
*   **Monitoring:**  Implement monitoring to track agent performance and identify potential issues.

These guidelines are a foundational framework for development. Continuous refinement and improvement will be essential as the project evolves.
```

<!-- base-actions-main-policy -->
## GitHub Actions — padrão obrigatório (@main)

- Referencie as actions internas sempre pelo branch, nunca por SHA:
  - `uses: juninmd/base-actions/<action>@main`
  - `uses: juninmd/base-actions/.github/workflows/<arquivo>.yml@main`
- Não fixe `@<sha>` em `juninmd/base-actions`: a atualização é centralizada no
  `main` e passa a valer no próximo run.
- PRs cujos checks não iniciam por billing/spending limit são mesclados pelo bot central
  `juninmd/base-actions/.github/workflows/auto-merge-billing-blocked.yml`.
  Para impedir o merge automático de um PR, aplique a label `do-not-merge`.