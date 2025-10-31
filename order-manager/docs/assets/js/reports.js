// This file handles the logic for generating and displaying reports.

document.addEventListener('DOMContentLoaded', function() {
    const reportContainer = document.getElementById('report-container');
    const generateReportButton = document.getElementById('generate-report');
    
    generateReportButton.addEventListener('click', function() {
        const reportData = fetchReportData();
        displayReport(reportData);
    });

    function fetchReportData() {
        // Simulate fetching report data
        return [
            { orderId: 1, customer: 'John Doe', total: 100, date: '2023-01-01' },
            { orderId: 2, customer: 'Jane Smith', total: 150, date: '2023-01-02' },
            // Add more sample data as needed
        ];
    }

    function displayReport(data) {
        reportContainer.innerHTML = ''; // Clear previous report
        const table = document.createElement('table');
        const headerRow = document.createElement('tr');

        const headers = ['Order ID', 'Customer', 'Total', 'Date'];
        headers.forEach(headerText => {
            const header = document.createElement('th');
            header.textContent = headerText;
            headerRow.appendChild(header);
        });
        table.appendChild(headerRow);

        data.forEach(order => {
            const row = document.createElement('tr');
            Object.values(order).forEach(text => {
                const cell = document.createElement('td');
                cell.textContent = text;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });

        reportContainer.appendChild(table);
    }
});