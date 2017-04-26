function append_table_as_html(csv, element_to_append_to) {
    $.get(csv, function(csv) {
        var data = $.csv.toArrays(csv),
            columns = [];

        //create the columns object
        for (var i = 0; i < data[0].length; i++) {
            (function(col) {
                columns.push({
                    title: col
                });
            })(data[0][i]);
        }

        //remove the CSV header row for convenience
        data.splice(0, 1);

        //create the dataTable
        var table = $(element_to_append_to).DataTable({
            columns: columns
        });

        //insert rows
        for (var i = 0; i < data.length; i++) {
            (function(row) {
                table.row.add(row).draw();
            })(data[i]);
        }
    });
}

function _append_as_table(csv, element_to_append_to) {
    $.get(csv, function(data) {
        // start the table
        var html = '<div class="container-fluid"><table class="table table-striped"><thead>';

        // split into lines
        var rows = data.split("\n");

        // split header
        var headers = rows.splice(0, 1);

        function generate_row(rowstring, col_sep_open, col_sep_close) {
            // split line into columns
            var columns = rowstring.split(",");
            if (columns.length > 1) {
                // start a table row
                html += '<tr>';
                for (var column = 0; column < columns.length; column++) {
                    html += col_sep_open + columns[column] + col_sep_close;
                }
                // close row
                html += '</tr>';
            }
        }

        generate_row(headers[0], '<th>', '</th>');
        html += '</thead><tbody>';

        // parse lines
        for (var i = 0; i < rows.length; i++) {
            generate_row(rows[i], '<td>', '</td>')
        }

        // close table
        html += '</tbody></table></div>';

        // insert into div
        $(element_to_append_to).append(html);
    });
}


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
        [sub4DataPath + 'single_CL_energies.csv', '#single_CL_table'],
        [sub4DataPath + 'single_NA_energies.csv', '#single_NA_table'],
        [sub4DataPath + 'six_CL_energies.csv', '#six_CL_table'],
        [sub4DataPath + 'six_NA_energies.csv', '#six_NA_table'],
        [sub4DataPath + 'neutralized_CL_energies.csv', '#eq_ions_table'],
        [sub4DataPath + 'diffussion_coefficients.csv', '#diff_coefs']
    ];

    for (var i = 0; i < csv_tables.length; i++) {
        _append_as_table(csv_tables[i][0], csv_tables[i][1])
    }
}

function loadAppendCandock() {
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

function loadAppendsSolvation() {
    var thermodynamicCycles = [
        [
            "Hydration Free energy of Cl",
            "sub4/solvation_energy/media/cl_hydration.png",
            "#hfe_cl"
        ],
        [
            "Hydration Free energy of F",
            "sub4/solvation_energy/media/f_cycle.png",
            "#hfe_f"
        ],
        [
            "Cycle for Difference in Hydration free energy (Cl vs F)",
            "sub4/solvation_energy/media/delta_delta_cycle.png",
            "#delta_delta_c"
        ]
	]
    for (var i = 0; i < thermodynamicCycles.length; i++) {
        imageAppendAsTab(
            thermodynamicCycles[i][0],
            thermodynamicCycles[i][1],
            thermodynamicCycles[i][2],
            "#cyclesTabHeader",
            "#cyclesTabsContent"
        );
    };

}
