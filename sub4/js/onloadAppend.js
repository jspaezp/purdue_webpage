function loadAppendsIonsInWater() {

    // Gists
    var gist_id = "3d8b58c2aadc964da9f806564210d431",
        gist_elements = [
            ["CL_topol.top", "Chloride Topology"],
            ["NA_topol.top", "Sodium Topology"],
            ["single_NA.gro", "Sodium Coordinates"],
            ["single_CL.gro", "Chloride Coordinates"],
            ["test_md.mdp", "Test parameters file (ndp)"],
            ["energy_minimization.mdp", "Energy Minimization mdp"],
            ["NVT_equilibration.mdp", "NVT equilibration mdp"],
            ["NPT_equilibration.mdp", "NPT equilibration mdp"],
            ["NPT_pre_production.mdp", "NPT pre-production mdp"],
            ["NPT_production.mdp", "NPT production mdp"]
        ];

    for (var i = 0; i < gist_elements.length; i++) {
        var current_element = gist_elements[i],
            element_id = "#" + current_element[0].replace(/\..+/, "");

        gist_element_append_as_tab(
            element_id,
            gist_id,
            current_element[0],
            current_element[1],
            "#gromacsTabHeader",
            "#gromacsTabsContent"
        );
    };

    // Radial Distribution Functions
    var added_elements = [
        [
            "RDF Single Ions in Water",
            "sub4/ions_in_water/single_ion_rdf.html",
            "#single_ion_rdf",
            "#rdfHeader",
            "#rdfContent"
        ],
        [
            "RDF Six Ions in Water",
            "sub4/ions_in_water/six_ions_rdf.html",
            "#six_ions_rdf",
            "#rdfHeader",
            "#rdfContent"
        ],
        [
            "RDF of equilibrated Ions in water",
            "sub4/ions_in_water/eq_ions.html",
            "#eq_ion_rdf",
            "#rdfHeader",
            "#rdfContent"
        ]
    ];


    for (var i = 0; i < added_elements.length; i++) {
        elementAppendAsTab(
            added_elements[i][0],
            added_elements[i][1],
            added_elements[i][2],
            added_elements[i][3],
            added_elements[i][4]
        );
    };

    imageAppendAsTab(
        "This is a simple test",
        "sub4/candock/media/ibuprofen.png",
        "#ibuprofen_side",
        "#rdfHeader",
        "#rdfContent"
    );

    // CSV tables
    var sub4DataPath = 'sub4/ions_in_water/data/';

    var csv_tables = [
        [sub4DataPath + 'single_CL_energies.csv', 'single_CL_table'],
        [sub4DataPath + 'single_NA_energies.csv', 'single_NA_table'],
        [sub4DataPath + 'six_CL_energies.csv', 'six_CL_table'],
        [sub4DataPath + 'six_NA_energies.csv', 'six_NA_table'],
        [sub4DataPath + 'neutralized_CL_energies.csv', 'eq_ions_table']
    ];

    for (var i = 0; i < csv_tables.length; i++) {
        append_table(csv_tables[i][0], csv_tables[i][1]);
    };
};

function loadAppendGromacs() {
    setTimeout(function() {
        CsvToHtmlTable.init({
            csv_path: 'sub4/candock/scores.csv',
            element: 'score_table',
            allow_download: true,
            csv_options: {
                separator: ',',
                delimiter: '"'
            },
            datatables_options: {
                "paging": false
            }
        });
    }, 2000);
}
