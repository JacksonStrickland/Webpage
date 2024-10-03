<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Stricklands</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation with tabs -->
    <nav>
        <ul>
            <li><a href="#family-members" class="active" onclick="openTab('family-members')">Family Members</a></li>
            <li><a href="#family-pictures" onclick="openTab('family-pictures')">Family Pictures</a></li>
            <li><a href="#family-tree" onclick="openTab('family-tree')">Family Tree</a></li>
        </ul>
    </nav>

    <!-- Main Content -->
    <div id="content">
        <!-- Tab Content: Family Members -->
        <div id="family-members" class="tab-content">
            <h1>The Stricklands</h1>
            <h2>Delila Strickland</h2>
            <p>Delila Strickland is the mother of two boys named <a href="https://jacksonstrickland.github.io/Jackson-Grayson/" target="_blank">Grayson and Jackson</a>.</p>
            <h2>Lila Strickland</h2>
            <p>Lila Strickland is the mother of Delila Strickland and grandmother of Grayson and Jackson.</p>
            <h2>John Strickland</h2>
            <p>John Strickland is the father of Delila Strickland and the grandfather of Grayson and Jackson.</p>
        </div>

        <!-- Tab Content: Family Pictures -->
        <div id="family-pictures" class="tab-content" style="display: none;">
            <h2>Random Word: Harmony</h2>
            <p>This section could showcase family pictures.</p>
        </div>

        <!-- Tab Content: Family Tree -->
        <div id="family-tree" class="tab-content" style="display: none;">
            <h2>Random Word: Adventure</h2>
            <p>This section could display the Strickland family tree.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>