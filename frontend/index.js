function submitForm() {
    // Collect form data
    const formData = {
        number: document.getElementById('number').value,
        channel: document.getElementById('channel').value,
        caller: document.getElementById('inputCaller').value,
        state: document.getElementById('inputState').value,
        category: document.getElementById('inputCategory').value,
        impact: document.getElementById('inputImpact').value,
        subcategory: document.getElementById('inputSubcategory').value,
        urgency: document.getElementById('inputUrgency').value,
        service: document.getElementById('inputService').value,
        priority: document.getElementById('inputPriority').value,
        serviceOffering: document.getElementById('inputServiceOffering').value,
        assignmentGroup: document.getElementById('inputAssignmentGroup').value,
        configurationItem: document.getElementById('inputConfigurationItem').value,
        assignedTo: document.getElementById('inputAssignedTo').value,
        shortDescription: document.getElementById('ShortDescription').value,
        description: document.getElementById('inputDescription').value,
    };

    // Log form data to the console
    console.log('Form Data:', formData);
}

function resolveIssue() {
    // You can add logic for resolving the issue here
    console.log('Issue Resolved');
}