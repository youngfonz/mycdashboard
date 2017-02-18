<?php
    require_once 'reader.php';

    $xlsx = new XLSXReader('page/optum_stream_full.xlsx');
    $data_view = $xlsx->getSheetData('Viewer Buckets Data');

    print_r(json_encode($data_view));
?>
