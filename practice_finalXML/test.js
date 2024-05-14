document.addEventListener('DOMContentLoaded', function() {
    const itemList = document.getElementById('itemList');

    fetch('sample.xml')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const labels = data.querySelectorAll('ochre items spatialUnit identification label');
            labels.forEach(label => {
                const listItem = document.createElement('li');
                listItem.textContent = label.textContent;
                itemList.appendChild(listItem);
            });
        });
});

document.addEventListener('DOMContentLoaded', function () {
    fetch('sample.xml')
        .then(response => response.text())
        .then(str => {
            // Parse the XML from fetched text
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(str, "application/xml");

            // Process the XML data
            const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
            const items = xmlDoc.getElementsByTagName('spatialUnit');
            for (let item of items) {
                const identificationLabel = item.getElementsByTagName('label')[0]?.textContent;
                const description = item.getElementsByTagName('description')[0]?.textContent;
                const properties = item.getElementsByTagName('property');
                const property1 = properties[0]?.getElementsByTagName('value')[0]?.textContent;
                const property2 = properties[1]?.getElementsByTagName('value')[0]?.textContent;

                // Create a new row with the extracted data
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${identificationLabel}</td>
                    <td>${description}</td>
                    <td>${property1}</td>
                    <td>${property2}</td>
                `;
                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error loading the data:', error));
});






