const annualProjectList = document.getElementById('annualProjectList');

const annualProjects = [
    {
        siteNumber: 120,
        siteName: 'Ankeveense Plassen',
        projectCode: 'BB02/2',
        projectName: 'DAMMERKADE 16',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 120,
        siteName: 'Ankeveense Plassen',
        projectCode: 'BB02/2',
        projectName: 'DAMMERKADE 16',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 120,
        siteName: 'Ankeveense Plassen',
        projectCode: 'BB02/2',
        projectName: 'DAMMERKADE 16',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 148,
        siteName: 'Aalkeetbuitenpolder',
        projectCode: 'BB02/2',
        projectName: 'BROEKPOLDERWEG 23, VLAARDINGEN VERGADERLOCATIE',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 148,
        siteName: 'Aalkeetbuitenpolder',
        projectCode: 'BM02/2',
        projectName: 'MONITOREN WEIDEVOGELS EN ALARMTELLING',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 148,
        siteName: 'Aalkeetbuitenpolder',
        projectCode: 'BM30/1',
        projectName: 'OPVRAGEN GEGEVENS WATERSTANDEN',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 148,
        siteName: 'Aalkeetbuitenpolder',
        projectCode: 'BB02/2',
        projectName: 'DAMMERKADE 16',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 407,
        siteName: 'Annabos',
        projectCode: 'BB02/2',
        projectName: 'DAMMERKADE 16',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 407,
        siteName: 'Annabos',
        projectCode: 'BM02/1',
        projectName: 'BROEDVOGELKARTERING',
        financialYear: '2019-01-01',
        status: 'Voorgedragen'
    },
    {
        siteNumber: 607,
        siteName: 'Baronie',
        projectCode: 'BB02/2',
        projectName: 'BEHEREN POEL EN KLEIN HISTORISCH WATER',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 001,
        siteName: 'Dollard',
        projectCode: 'BN62/1',
        projectName: 'UITVAL OVEREENKOMSTEN',
        financialYear: '2019-01-01',
        status: 'Goedgekeurd'
    },
    {
        siteNumber: 001,
        siteName: 'Dollard',
        projectCode: 'BU01/1',
        projectName: 'PERIODIEK FINANCIELE BIJDRAGE NATUURVISIE',
        financialYear: '2019-01-01',
        status: 'Voorgedragen'
    }
];

let output = '';
annualProjects.forEach((project) => {
    output += `
    <li class="list-group-item">
        <div class="row">
            <div class="col-md-5 order-1">
                <strong>Site</strong> ${project.siteName} (${project.siteNumber})
            </div>
            <div class="col-md-5 order-3">
                <strong>Financial Year</strong> ${project.financialYear}
            </div>
            <div class="col-md-5 order-2 order-md-3">
                    <strong>Project</strong> ${project.projectCode} - ${project.projectName}
                </div>
            <div class="col-md-5 order-4">
                <strong>Status</strong> ${project.status}
            </div>
            <div class="col-md-2 order-5">
                <button class="btn btn-primary float-right">Details</button>
            </div>
        </div>
    </li>
    `;
});

annualProjectList.innerHTML = output;