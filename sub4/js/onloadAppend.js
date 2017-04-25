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
    var addedRDFs = [
        [
            "RDF Single Ions in Water",
            "sub4/ions_in_water/single_ion_rdf.html",
            "#single_ion_rdf"
        ],
        [
            "RDF Six Ions in Water",
            "sub4/ions_in_water/six_ions_rdf.html",
            "#six_ions_rdf"
        ],
        [
            "RDF of equilibrated Ions in water",
            "sub4/ions_in_water/eq_ions.html",
            "#eq_ion_rdf"
        ]
    ];


    for (var i = 0; i < addedRDFs.length; i++) {
        elementAppendAsTab(
            addedRDFs[i][0],
            addedRDFs[i][1],
            addedRDFs[i][2],
            "#rdfHeader",
            "#rdfContent"
        );
    };


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

function loadAppendCandock() {
    // setTimeout(function() {
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
    // }, 2000);

    var candockMolecules = [
        [
            "P30",
            "sub4/candock/media/p30_ligand_sideview.png",
            "#p30_side"
        ],
        [
            "1N1",
            "sub4/candock/media/1N1_ligand_sideview.png",
            "#1n1_side"
        ],
        [
            "IRE",
            "sub4/candock/media/IRE_ligand_sideview.png",
            "#ire_side"
        ],
        [
            "Penicillin G",
            "sub4/candock/media/penicillin_g.png",
            "#penicillin_side"
        ],
        [
            "Etiracetam",
            "sub4/candock/media/etiracetam_ligand_sideview.png",
            "#etiracetam_side"
        ],
        [
            "Fluoxotine",
            "sub4/candock/media/fluoxotine_ligand_sideview.png",
            "#fluoxotine_side"
        ],
        [
            "Ibuprofen",
            "sub4/candock/media/ibuprofen.png",
            "#ibuprofen_side"
        ],
        [
            "Testosterone",
            "sub4/candock/media/testosterone_side.png",
            "#testosterone_side"
        ],
        [
            "All Ligands",
            "sub4/candock/media/pocket_all_ligands.png",
            "#all_side_Ligands"
        ]
    ];

    for (var i = 0; i < candockMolecules.length; i++) {
        imageAppendAsTab(
            candockMolecules[i][0],
            candockMolecules[i][1],
            candockMolecules[i][2],
            "#candockSidesTabHeader",
            "#candockSidesTabsContent"
        );
    };
}
