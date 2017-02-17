<?php
    require_once 'reader.php';
    $xlsx = new SimpleXLSX('page/optum_stream_full.xlsx');

    $stats = $xlsx->rows(6);
    print_r(json_encode($stats));
?>
